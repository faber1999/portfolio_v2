<script setup lang="ts">
import { watch, nextTick, shallowRef } from 'vue'
import { useTransition } from '@vueuse/core'

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

// Cuando cambia la prop value se reinicia la animación
watch(
  () => props.value,
  async () => {
    progress.value = 0
    await nextTick()
    progress.value = props.value
  },
  { immediate: true },
)
</script>

<template>
  <!-- Al asignar :key="colorMode.value" se fuerza la remount al cambiar el color mode -->
  <div class="w-full flex flex-col gap-2 bg-gray-50 p-4 rounded-lg dark:bg-gray-50/5">
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
