<script setup lang="ts">
// import ProgressBar from '@/components/ProgressBar.vue'
import SkillBar from '@/components/SkillBar.vue'

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface Skill {
  name: string
  level: SkillLevel
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
    <SkillBar :value="skill.level" :text="skill.name" />
    <!-- <ProgressBar :value="skill.level" :text="skill.name" /> -->
  </div>
</template>
