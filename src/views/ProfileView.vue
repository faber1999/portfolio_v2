<script setup lang="ts">
import CardSpotlight from '@/components/CardSpotlight.vue'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value == 'dark')
</script>

<template>
  <div class="flex h-full gap-4">
    <div class="w-3/5">
      <CardSpotlight
        class="flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
        >About me section</CardSpotlight
      >
    </div>

    <div class="flex flex-col w-2/5 gap-4">
      <CardSpotlight
        class="flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
      >
        Something here
      </CardSpotlight>
      <CardSpotlight
        class="flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
      >
        Map Here
      </CardSpotlight>
      <!-- <div class="bg-purple-500 w-full h-1/2 rounded-2xl"></div> -->
    </div>
  </div>
</template>
