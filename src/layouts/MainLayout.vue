<script setup lang="ts">
import MyAside from '@/components/MyAside.vue'
import MyHeader from '@/components/MyHeader.vue'
import router from '@/router'
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

router.afterEach(() => {
  isAsideOpen.value = breakpoints.isGreaterOrEqual('lg')
})
</script>

<template>
  <div
    class="flex flex-row flex-1 bg-gradient-to-b pb-8 pr-8"
    :class="{
      'from-bg-gradient-start from-0% to-bg-gradient-end to-100%': !isDark,
      'from-bg-gradient-start from-50% to-bg-gradient-end to-100%': isDark,
    }"
  >
    <MyAside :is-aside-open="isAsideOpen" />

    <main class="flex flex-col flex-1">
      <MyHeader :is-aside-open="isAsideOpen" @action-clicked="toggleAsideAction" />

      <div class="bg-primary rounded-3xl flex-1 p-4 shadow-lg shadow-gray-500/50">
        <slot />
      </div>
    </main>
  </div>
</template>
