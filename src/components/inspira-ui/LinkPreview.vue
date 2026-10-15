<template>
  <div :class="cn('relative w-fit', props.class)">
    <!-- Trigger -->
    <a
      ref="trigger"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      :class="cn('text-black dark:text-white', props.linkClass)"
      @pointermove="handlePointerMove"
      @pointerenter="handlePointerEnter"
      @pointerleave="hidePreview"
      @focus="handleFocus"
      @blur="hidePreview"
      @keydown.esc="hidePreview"
    >
      <slot />
    </a>

    <!-- Preview (decorative: the link text already describes the destination) -->
    <div
      v-if="isVisible && !hasError"
      ref="preview"
      class="pointer-events-none absolute z-50"
      :style="previewStyle"
      aria-hidden="true"
    >
      <div
        class="overflow-hidden rounded-xl shadow-xl"
        :class="[popClass, { 'transform-gpu': !props.isStatic }]"
      >
        <div
          class="block rounded-xl border-2 border-transparent bg-white p-1 shadow-lg dark:bg-gray-900"
        >
          <!-- Spinner while loading -->
          <div v-if="isLoading" class="flex items-center justify-center" :style="imageStyle">
            <div
              class="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400"
              style="width: 24px; height: 24px"
            ></div>
          </div>

          <!-- Image -->
          <img
            v-else
            :src="previewSrc"
            :width="width"
            :height="height"
            class="size-full rounded-lg object-cover"
            :style="imageStyle"
            alt=""
            @load="handleImageLoad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed, reactive, ref, type CSSProperties } from 'vue'

interface BaseProps {
  class?: string
  linkClass?: string
  width?: number
  height?: number
}

// Props for static image mode
interface StaticImageProps extends BaseProps {
  isStatic: true
  imageSrc: string
  url?: string // optional in static mode
}

// Props for URL preview mode
interface URLPreviewProps extends BaseProps {
  isStatic?: false // optional but must be false if specified
  imageSrc?: string // optional in URL mode
  url: string
}

// Combined type that enforces the requirements
type Props = StaticImageProps | URLPreviewProps
const props = withDefaults(defineProps<Props>(), {
  isStatic: false,
  imageSrc: '',
  url: '',
  width: 200,
  height: 125,
})

const isVisible = ref(false)
const isLoading = ref(true)
const trigger = ref<HTMLAnchorElement | null>(null)
const preview = ref<HTMLElement | null>(null)
const hasPopped = ref(false)
const hasError = ref(false)
// The screenshot is requested lazily, on the first hover/keyboard focus, not on mount.
const hasRequestedImage = ref(false)

// Generate preview URL
const previewSrc = computed(() => {
  if (props.isStatic) return props.imageSrc

  const params = new URLSearchParams({
    url: props.url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    colorScheme: 'light',
    'viewport.isMobile': 'true',
    'viewport.deviceScaleFactor': '1',
    'viewport.width': String(props.width * 3),
    'viewport.height': String(props.height * 3),
  })

  return `https://api.microlink.io/?${params.toString()}`
})

// Horizontal anchor point of the preview (pointer x, or link center on keyboard focus)
const anchor = reactive({ x: 0 })

// Calculate preview position
const previewStyle = computed<CSSProperties>(() => {
  if (!preview.value) return {}

  const offset = 20
  const previewWidth = props.width
  const previewHeight = props.height
  const viewportWidth = window.innerWidth

  let x = anchor.x - previewWidth / 2
  x = Math.min(Math.max(0, x), viewportWidth - previewWidth)

  const linkRect = trigger.value?.getBoundingClientRect()
  let y = 0
  if (linkRect) {
    y = linkRect.top - previewHeight - offset
    // Not enough room above the link: show it below instead
    if (y < 0) y = linkRect.bottom + offset
  }

  return {
    position: 'fixed',
    left: `${x}px`,
    top: `${y}px`,
    width: `${previewWidth}px`,
    height: `${previewHeight}px`,
  }
})

// Image specific styling
const imageStyle = computed<CSSProperties>(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
}))

// Pop animation class
const popClass = computed(() => {
  if (!hasPopped.value) return ''
  return 'animate-pop'
})

function handlePointerMove(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  anchor.x = event.clientX
}

function handlePointerEnter(event: PointerEvent) {
  // Touch/pen taps navigate directly; the floating preview is a mouse-only enhancement.
  if (event.pointerType !== 'mouse') return
  anchor.x = event.clientX
  showPreview()
}

function handleFocus(event: FocusEvent) {
  const el = event.currentTarget as HTMLElement
  // Only keyboard focus (focus-visible) shows the preview, so taps on touch devices don't.
  if (!el.matches(':focus-visible')) return
  const rect = el.getBoundingClientRect()
  anchor.x = rect.left + rect.width / 2
  showPreview()
}

function showPreview() {
  requestImage()
  isVisible.value = true
  setTimeout(() => {
    hasPopped.value = true
  }, 50)
}

function hidePreview() {
  isVisible.value = false
  hasPopped.value = false
}

function handleImageLoad() {
  isLoading.value = false
}

// Request the screenshot once; the <img> then renders it from cache.
function requestImage() {
  if (hasRequestedImage.value) return
  const src = previewSrc.value
  if (!src) return
  hasRequestedImage.value = true

  const img = new Image()
  img.onload = () => {
    isLoading.value = false
  }
  img.onerror = () => {
    isLoading.value = false
    hasError.value = true
  }
  img.src = src
}
</script>

<style scoped>
.transform-gpu {
  transform-origin: center bottom;
  will-change: transform;
  backface-visibility: hidden;
}

.animate-pop {
  animation: pop 1000ms ease forwards;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .animate-pop {
    animation: none;
  }
}

@keyframes pop {
  0% {
    transform: scale3d(0.26, 0.26, 1);
  }
  25% {
    transform: scale3d(1.1, 1.1, 1);
  }
  65% {
    transform: scale3d(0.98, 0.98, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>
