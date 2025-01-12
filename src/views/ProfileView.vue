<script setup lang="ts">
import CardSpotlight from '@/components/inspira-ui/CardSpotlight.vue'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value == 'dark')
</script>

<template>
  <div class="flex flex-col flex-1 h-full gap-4 lg:flex-row">
    <div class="h-1/3 w-full lg:w-3/5 lg:h-full">
      <CardSpotlight
        class="flex-col items-center justify-center whitespace-nowrap text-2xl shadow-2xl lg:text-4xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
        >About me section</CardSpotlight
      >
    </div>

    <div class="flex h-2/3 w-full flex-col gap-4 lg:w-2/5 lg:h-full">
      <CardSpotlight
        class="flex-col items-center justify-center whitespace-nowrap text-2xl shadow-2xl lg:text-4xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
      >
        Something here
      </CardSpotlight>
      <CardSpotlight
        class="flex-col items-center justify-center whitespace-nowrap text-2xl shadow-2xl lg:text-4xl"
        :gradient-color="isDark ? '#363636' : '#C9C9C9'"
      >
        Map Here
      </CardSpotlight>
      <!-- <div class="bg-purple-500 w-full h-1/2 rounded-2xl"></div> -->
    </div>
  </div>
</template>
