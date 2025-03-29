<script setup lang="ts">
import ProgressBar from '@/components/ProgressBar.vue'

export interface Skill {
  name: string
  level: number
}

defineProps({
  skill: {
    type: Object as () => Skill,
    required: true,
  },
})
</script>

<template>
  <div>
    <ProgressBar :value="skill.level" :text="skill.name" />
  </div>
</template>
