<script setup lang="ts">
import SkillProgressItem, { type Skill } from './SkillProgressItem.vue'

const skills: Skill[] = [
  {
    name: 'JavaScript',
    level: 90,
  },
  {
    name: 'TypeScript',
    level: 85,
  },
  {
    name: 'Vue.js',
    level: 80,
  },
  {
    name: 'React.js',
    level: 90,
  },
  {
    name: 'Nest.js',
    level: 70,
  },
  {
    name: 'Sql Server',
    level: 90,
  },
  {
    name: 'Git',
    level: 80,
  },
  {
    name: 'C#',
    level: 60,
  },
]

const sortedSkills = skills.sort((a, b) => b.level - a.level)
</script>

<template>
  <h1 class="title text-xl 2xl:text-2xl font-semibold">{{ $t('profile.technical-skills') }}</h1>

  <div class="flex flex-col flex-grow w-full gap-4">
    <SkillProgressItem v-for="skill in sortedSkills" :key="skill.name" :skill="skill" />
  </div>
</template>
