<script setup lang="ts">
import SkillProgressItem, { type Skill } from './SkillProgressItem.vue'

const skills: Skill[] = [
  {
    name: 'React.js',
    level: 'expert',
  },
  {
    name: 'Next.js',
    level: 'advanced',
  },
  {
    name: 'Vue.js',
    level: 'advanced',
  },
  {
    name: 'Angular',
    level: 'advanced',
  },
  {
    name: 'JavaScript',
    level: 'advanced',
  },
  {
    name: 'TypeScript',
    level: 'advanced',
  },
  {
    name: 'Node.js',
    level: 'intermediate',
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
  {
    name: 'Jenkins',
    level: 'beginner',
  },
  {
    name: 'n8n',
    level: 'beginner',
  },
  {
    name: 'supabase',
    level: 'intermediate',
  },
]
</script>

<template>
  <div class="grid lg:grid-cols-2 flex-grow w-full gap-6">
    <SkillProgressItem v-for="skill in skills" :key="skill.name" :skill="skill" />
  </div>
</template>
