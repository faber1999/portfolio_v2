<script setup lang="ts">
export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner'

export interface Skill {
  name: string
  level: SkillLevel
  icon?: string
}

const skills: Skill[] = [
  { name: 'React', level: 'expert', icon: '/icons/react.svg' },
  { name: 'SQL Server', level: 'expert', icon: '/icons/sqlserver.svg' },
  { name: 'Next.js', level: 'advanced', icon: '/icons/nextjs.svg' },
  { name: 'Vue.js', level: 'advanced', icon: '/icons/vue.svg' },
  { name: 'Angular', level: 'advanced', icon: '/icons/angular.svg' },
  { name: 'JavaScript', level: 'advanced', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', level: 'advanced', icon: '/icons/typescript.svg' },
  { name: 'Node.js', level: 'intermediate', icon: '/icons/nodejs.svg' },
  { name: 'NestJS', level: 'intermediate', icon: '/icons/nestjs.svg' },
  { name: 'C#', level: 'intermediate', icon: '/icons/csharp.svg' },
  { name: 'Git', level: 'intermediate', icon: '/icons/git.svg' },
  { name: 'Supabase', level: 'intermediate', icon: '/icons/supabase.svg' },
  { name: 'Jenkins', level: 'beginner', icon: '/icons/jenkins.svg' },
  { name: 'n8n', level: 'beginner', icon: '/icons/n8n.svg' },
]

const levels: SkillLevel[] = ['expert', 'advanced', 'intermediate', 'beginner']

const groups = levels
  .map((level) => ({ level, items: skills.filter((skill) => skill.level === level) }))
  .filter((group) => group.items.length > 0)
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2">
    <section
      v-for="group in groups"
      :key="group.level"
      :aria-labelledby="`skills-level-${group.level}`"
      class="flex flex-col gap-2.5"
    >
      <h3
        :id="`skills-level-${group.level}`"
        class="text-xs uppercase tracking-widest text-gray-600 dark:text-white/70 font-semibold"
      >
        {{ $t(`skills.levels.${group.level}`) }}
      </h3>

      <ul class="flex flex-wrap gap-2">
        <li
          v-for="skill in group.items"
          :key="skill.name"
          :class="[
            'inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/5 py-1.5 text-sm leading-none whitespace-nowrap text-gray-800 dark:text-white/85 cursor-default transition-colors duration-200 hover:border-secondary/60 hover:bg-black/[0.07] dark:hover:bg-white/10',
            skill.icon ? 'pl-1.5 pr-3' : 'px-3',
          ]"
        >
          <!-- Decorative: the name is rendered as text next to it (same treatment as TechStack). -->
          <img
            v-if="skill.icon"
            :src="skill.icon"
            alt=""
            width="20"
            height="20"
            class="size-5 shrink-0 rounded-[5px] p-[2px] object-contain dark:bg-white/80 dark:ring-1 dark:ring-white/10"
          />
          <span>{{ skill.name }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
