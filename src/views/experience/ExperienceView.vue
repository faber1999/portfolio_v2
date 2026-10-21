<script setup lang="ts">
import ExperienceItem from './components/ExperienceItem.vue'
import IconComputerCode from '@/components/icons/IconComputerCode.vue'
import type { YearMonth } from '@/composables/useDateFormat'

interface ExperienceEntry {
  position: string
  company: string
  start: YearMonth
  end?: YearMonth
  descriptions: string[]
  /** Technology names (language-independent); icons are resolved from `techIcons`. */
  stack: string[]
}

const experience: ExperienceEntry[] = [
  {
    position: 'experience.job-4-position',
    company: 'Smith',
    start: '2026-04',
    end: '2026-10',
    descriptions: [
      'experience.job-4-description-1',
      'experience.job-4-description-2',
      'experience.job-4-description-3',
      'experience.job-4-description-4',
    ],
    stack: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Zustand',
      'TanStack Query',
      'GraphQL',
      'Contentstack',
      'Azure Functions',
      'Figma',
      'Jira',
      'Cursor',
      'Claude Code',
      'Datadog',
    ],
  },
  {
    position: 'experience.job-3-position',
    company: 'Celuweb.com S.A.S.',
    start: '2022-03',
    end: '2025-11',
    descriptions: ['experience.job-3-description-1', 'experience.job-3-description-2'],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Zustand',
      'TanStack Query',
      'Ant Design',
      'Tailwind CSS',
      'ECharts',
      '.NET Core',
      'C#',
      'SQL Server',
    ],
  },
  {
    position: 'experience.job-2-position',
    company: 'Sophos Solutions',
    start: '2021-05',
    end: '2022-03',
    descriptions: ['experience.job-2-description-1', 'experience.job-2-description-2'],
    stack: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      '.NET Core 5',
      'C#',
      'SQL Server',
      'Slack',
    ],
  },
  {
    position: 'experience.job-1-position',
    company: 'Celuweb.com S.A.S.',
    start: '2018-06',
    end: '2021-04',
    descriptions: ['experience.job-1-description-1', 'experience.job-1-description-2'],
    stack: [
      'React',
      'Vue.js',
      'JavaScript',
      '.NET Framework',
      'C#',
      'Visual Basic',
      'SQL Server',
      'SQLite',
    ],
  },
]
</script>

<template>
  <div class="view-stack flex flex-col flex-1 min-h-full gap-6 xl:flex-row">
    <div
      class="surface-panel flex flex-col gap-6 bg-tertiary p-5 md:p-8 rounded-2xl w-full min-w-0"
    >
      <h1
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconComputerCode class="size-10" aria-hidden="true" />

        {{ $t('experience.work-experience') }}
      </h1>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <ol class="flex flex-col gap-2 md:gap-3">
        <ExperienceItem v-for="item in experience" :key="item.position" v-bind="item" />
      </ol>
    </div>
  </div>
</template>
