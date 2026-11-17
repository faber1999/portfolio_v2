// Work experience shown on /experience, newest first.
//
// To add a job: add an entry at the top of the array. `position` and `descriptions` are i18n
// keys; add their texts to src/langs/locals/en.json and es.json (e.g. experience.job-5-position,
// experience.job-5-description-1). Dates are 'YYYY-MM'; omit `end` for a current position.
// `stack` holds plain technology names; logos are looked up by name in ExperienceItem.vue.
import type { ExperienceEntry } from './types'

export const experience: ExperienceEntry[] = [
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
