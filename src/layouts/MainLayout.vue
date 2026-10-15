<script setup lang="ts">
import ParticlesBg from '@/components/inspira-ui/ParticlesBg.vue'
import MyAside from '@/components/MyAside.vue'
import MyHeader from '@/components/MyHeader.vue'
import { useDeviceType } from '@/composables/useDeviceType'
import { useDark, useEventListener, useMutationObserver, useResizeObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const isDark = useDark()

const { isMobile } = useDeviceType()

// Edge fades on the scroll container: only shown when content is scrolled past that edge.
const content = ref<HTMLElement | null>(null)
const fadeTop = ref(false)
const fadeBottom = ref(false)
const scrollbarWidth = ref(0)

function updateEdgeFade() {
  const el = content.value
  if (!el) return
  fadeTop.value = el.scrollTop > 1
  fadeBottom.value = el.scrollTop + el.clientHeight < el.scrollHeight - 1
  scrollbarWidth.value = el.offsetWidth - el.clientWidth
}

useEventListener(content, 'scroll', updateEdgeFade, { passive: true })
// Images don't bubble `load`, so listen in the capture phase to catch late height changes.
useEventListener(content, 'load', updateEdgeFade, { capture: true, passive: true })
useResizeObserver(content, updateEdgeFade)
useMutationObserver(content, updateEdgeFade, { childList: true, subtree: true })
onMounted(updateEdgeFade)

function skipToContent() {
  content.value?.focus({ preventScroll: true })
}
</script>

<template>
  <div class="relative flex flex-row flex-1 min-h-0 bg-primary text-primary">
    <a
      href="#content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-black focus:shadow-lg"
      @click.prevent="skipToContent"
    >
      {{ $t('a11y.skip-to-content') }}
    </a>

    <!-- DOM order is header -> nav -> main (tab order); the grid places the nav at the bottom on
         mobile and as a full-height left rail on desktop. -->
    <div class="app-shell z-10 relative min-h-0 size-full">
      <MyHeader class="app-shell-header w-full max-w-[1600px] justify-self-center" />

      <MyAside class="app-shell-nav" />

      <!-- Block (not flex) on purpose: views use `min-h-full`, which in a flex column would
           clamp them to the viewport so content overflows them and pb-6 is lost at scroll end. -->
      <main
        ref="content"
        id="content"
        tabindex="-1"
        class="app-shell-content scroll-fade w-full max-w-[1600px] justify-self-center min-h-0 px-4 md:px-8 pb-4 md:pb-6 overflow-x-hidden overflow-y-auto"
        :class="{ 'fade-top': fadeTop, 'fade-bottom': fadeBottom }"
        :style="{ '--scrollbar-w': `${scrollbarWidth}px` }"
      >
        <slot />
      </main>
    </div>

    <ParticlesBg
      class="absolute z-0 size-full pointer-events-none"
      :quantity="isMobile ? 80 : 120"
      :ease="100"
      :color="isDark ? '#404040' : '#adadad'"
      :staticity="20"
      refresh
    />
  </div>
</template>
