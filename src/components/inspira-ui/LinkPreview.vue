<template>
  <div :class="cn('relative w-fit', props.class)">
    <!-- Trigger -->
    <a
      :href="url"
      target="_blank"
      :class="cn('text-black dark:text-white', props.linkClass)"
      @mousemove="handleMouseMove"
      @mouseenter="showPreview"
      @mouseleave="hidePreview"
    >
      <slot />
    </a>

    <!-- Preview -->
    <div
      v-if="isVisible"
      ref="preview"
      class="pointer-events-none absolute z-50"
      :style="previewStyle"
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
            alt="preview"
            @load="handleImageLoad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed, onMounted, reactive, ref, type CSSProperties } from 'vue'

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
const preview = ref<HTMLElement | null>(null)
const hasPopped = ref(false)

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

// Position tracking
const mousePosition = reactive({
  x: 0,
  y: 0,
})

// Calculate preview position
const previewStyle = computed<CSSProperties>(() => {
  if (!preview.value) return {}

  const offset = 20
  const previewWidth = props.width
  const previewHeight = props.height
  const viewportWidth = window.innerWidth

  let x = mousePosition.x - previewWidth / 2
  x = Math.min(Math.max(0, x), viewportWidth - previewWidth)

  const linkRect = preview.value.parentElement?.getBoundingClientRect()
  const y = linkRect ? linkRect.top - previewHeight - offset : 0

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

function handleMouseMove(event: MouseEvent) {
  mousePosition.x = event.clientX
  mousePosition.y = event.clientY
}

function showPreview() {
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

// Preload image on component mount
function preloadImage() {
  if (!props.isStatic && props.url) {
    const img = new Image()
    img.onload = () => {
      isLoading.value = false
    }
    img.onerror = () => {
      isLoading.value = false
    }
    img.src = previewSrc.value
  } else if (props.isStatic && props.imageSrc) {
    const img = new Image()
    img.onload = () => {
      isLoading.value = false
    }
    img.onerror = () => {
      isLoading.value = false
    }
    img.src = props.imageSrc
  }
}

onMounted(() => {
  preloadImage()
})
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
