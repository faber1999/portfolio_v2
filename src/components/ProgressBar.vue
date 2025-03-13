<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import { useIntersectionObserver, useTransition } from '@vueuse/core'

const target = useTemplateRef<HTMLDivElement>('progressTarget')

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (v: number) => v >= 0 && v <= 100,
  },
  text: {
    type: String,
    default: '',
  },
})

const progress = shallowRef(0)
const animatedProgress = useTransition(progress, { duration: 1250 })

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    progress.value = props.value
  }
})
</script>

<template>
  <!-- Al asignar :key="colorMode.value" se fuerza la remount al cambiar el color mode -->
  <div
    ref="progressTarget"
    class="w-full flex flex-col gap-2 bg-gray-50 p-4 rounded-lg dark:bg-gray-50/5"
  >
    <div class="flex gap-2 font-semibold">
      <span>{{ text }}</span>
      -
      <span>{{ props.value }}%</span>
    </div>
    <div class="w-full h-1 bg-primary rounded-full overflow-hidden">
      <div
        class="h-full rounded-full bg-gradient-to-r from-secondary to-tertiary"
        :style="{ width: animatedProgress + '%' }"
      ></div>
    </div>
  </div>
</template>
