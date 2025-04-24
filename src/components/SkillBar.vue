<script setup lang="ts">
import { type SkillLevel } from '@/views/profile/components/SkillProgressItem.vue'

const props = defineProps({
  value: {
    type: String as () => SkillLevel,
    default: 'beginner',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <!-- Al asignar :key="colorMode.value" se fuerza la remount al cambiar el color mode -->
  <div class="w-full flex flex-col gap-2 bg-gray-50 p-4 rounded-lg dark:bg-gray-50/5">
    <div class="flex gap-2 font-semibold">
      <span>{{ text }}</span>
      -
      <span class="capitalize title">{{ props.value }}</span>
    </div>
  </div>
</template>
