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
</script>

<template>
  <div class="relative flex flex-row flex-1 min-h-0 bg-primary text-primary">
    <div class="size-full flex flex-row">
      <main class="flex flex-col-reverse z-10 relative min-h-0 size-full md:flex-row">
        <MyAside />

        <div class="mx-auto flex flex-col flex-1 min-w-0 min-h-0 max-w-[1600px]">
          <MyHeader />

          <!-- Block (not flex) on purpose: views use `min-h-full`, which in a flex column would
               clamp them to the viewport so content overflows them and pb-6 is lost at scroll end. -->
          <div
            ref="content"
            class="scroll-fade flex-1 min-h-0 px-4 md:px-8 pb-4 md:pb-6 overflow-x-hidden overflow-y-auto"
            :class="{ 'fade-top': fadeTop, 'fade-bottom': fadeBottom }"
            :style="{ '--scrollbar-w': `${scrollbarWidth}px` }"
            id="content"
          >
            <slot />
          </div>
        </div>
      </main>
    </div>

    <ParticlesBg
      class="absolute z-0 size-full pointer-events-none"
      :quantity="isMobile ? 150 : 300"
      :ease="100"
      :color="isDark ? '#404040' : '#adadad'"
      :staticity="20"
      refresh
    />
  </div>
</template>
