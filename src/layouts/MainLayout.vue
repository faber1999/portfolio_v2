<script setup lang="ts">
import ParticlesBg from '@/components/inspira-ui/ParticlesBg.vue'
import MyAside from '@/components/MyAside.vue'
import MyHeader from '@/components/MyHeader.vue'
import { breakpointsTailwind, useBreakpoints, useColorMode } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

const colorMode = useColorMode()
const breakpoints = useBreakpoints(breakpointsTailwind)

const isDark = computed(() => colorMode.value == 'dark')

const isAsideOpen = ref()
isAsideOpen.value = breakpoints.isGreaterOrEqual('lg')

const toggleAsideAction = (alwaysFalse = false) => {
  if (alwaysFalse) {
    isAsideOpen.value = false
    return
  }

  isAsideOpen.value = !isAsideOpen.value
}

watch(breakpoints.active(), () => {
  isAsideOpen.value = breakpoints.isGreaterOrEqual('lg')
})

// router.afterEach(() => {
//   isAsideOpen.value = breakpoints.isGreaterOrEqual('lg')
// })
</script>

<template>
  <div class="relative flex flex-row flex-1 bg-primary">
    <div class="size-full flex flex-row flex-1">
      <div class="z-10 relative flex size-full">
        <MyAside :is-aside-open="isAsideOpen" />

        <main class="flex flex-col flex-1">
          <MyHeader :is-aside-open="isAsideOpen" @action-clicked="toggleAsideAction" />

          <div class="flex rounded-3xl flex-1 p-4 overflow-y-auto">
            <slot />
          </div>
        </main>
      </div>
      <ParticlesBg
        class="absolute z-0 size-full"
        :quantity="150"
        :ease="100"
        :color="isDark ? '#FFF' : '#000'"
        :staticity="20"
        refresh
      />
    </div>
  </div>
</template>
