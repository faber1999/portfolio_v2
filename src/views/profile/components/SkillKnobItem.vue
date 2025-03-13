<script setup lang="ts">
import KnobProgress from '@/components/KnobProgress.vue'

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
  <div class="col-span-1 aspect-square bg-tertiary p-4 rounded-2xl max-w-[200px]">
    <KnobProgress
      color-start="var(--secondary)"
      color-end="var(--tertiary)"
      :value="skill.level"
      :text="skill.name"
      :rounded="true"
      :arcAngle="260"
      show-percentage
    />
  </div>
</template>
