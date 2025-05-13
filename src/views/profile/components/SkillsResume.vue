<script setup lang="ts">
import SkillProgressItem, { type Skill } from './SkillProgressItem.vue'

const skills: Skill[] = [
  {
    name: 'JavaScript',
    level: 'advanced',
  },
  {
    name: 'TypeScript',
    level: 'advanced',
  },
  {
    name: 'Vue.js',
    level: 'advanced',
  },
  {
    name: 'React.js',
    level: 'expert',
  },
  {
    name: 'Nest.js',
    level: 'intermediate',
  },
  {
    name: 'Sql Server',
    level: 'expert',
  },
  {
    name: 'Git',
    level: 'intermediate',
  },
  {
    name: 'C#',
    level: 'intermediate',
  },
]
</script>

<template>
  <div class="grid lg:grid-cols-2 flex-grow w-full gap-6">
    <SkillProgressItem v-for="skill in skills" :key="skill.name" :skill="skill" />
  </div>
</template>
