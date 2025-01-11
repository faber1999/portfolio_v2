<script setup lang="ts">
import MyAside from '@/components/MyAside.vue'
import MyHeader from '@/components/MyHeader.vue'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value == 'dark')
</script>

<template>
  <div
    class="flex flex-col flex-1 bg-gradient-to-b pb-8 pr-8"
    :class="{
      'from-bg-gradient-start from-0% to-bg-gradient-end to-100%': !isDark,
      'from-bg-gradient-start from-50% to-bg-gradient-end to-100%': isDark,
    }"
  >
    <MyHeader />

    <main class="flex flex-row flex-1">
      <MyAside />

      <div class="bg-primary rounded-3xl flex-1 p-4 shadow-lg shadow-gray-500/50">
        <slot />
      </div>
    </main>
  </div>
</template>
