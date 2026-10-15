<script setup lang="ts">
import { computed, useId } from 'vue'
import TechChip from '@/components/TechChip.vue'
import { useDateFormat, type YearMonth } from '@/composables/useDateFormat'

interface Props {
  position: string
  company: string
  /** Start date, e.g. "2022-03" */
  start: YearMonth
  /** End date; omit for the current position */
  end?: YearMonth
  descriptions: string[]
  /** Technology names, e.g. "React 19", "SQL Server" */
  stack: string[]
}

const props = defineProps<Props>()

const { formatMonthYear } = useDateFormat()

/** Logos in /public/icons keyed by technology name without its version suffix. */
const techIcons: Record<string, string> = {
  React: '/icons/react.svg',
  'Next.js': '/icons/nextjs.svg',
  'Vue.js': '/icons/vue.svg',
  Angular: '/icons/angular.svg',
  TypeScript: '/icons/typescript.svg',
  JavaScript: '/icons/javascript.svg',
  'Tailwind CSS': '/icons/tailwindcss.svg',
  Zustand: '/icons/zustand.webp',
  'TanStack Query': '/icons/tanstack.svg',
  'Ant Design': '/icons/antd.svg',
  Contentstack: '/icons/contentstack.svg',
  'Azure Functions': '/icons/azure-function.svg',
  Datadog: '/icons/datadog.svg',
  'C#': '/icons/csharp.svg',
  '.NET Core': '/icons/netcore.svg',
  '.NET Framework': '/icons/netcore.svg',
  'SQL Server': '/icons/sqlserver.svg',
  Jira: '/icons/jira.svg',
  Cursor: '/icons/cursor.svg',
  'Claude Code': '/icons/claude-code.svg',
  GraphQL: '/icons/graphql.svg',
  'Visual Basic': '/icons/vb.svg',
  SQLite: '/icons/sqlite.svg',
  Figma: '/icons/figma.svg',
  Slack: '/icons/slack.svg',
}

const techs = computed(() =>
  props.stack.map((name) => ({ name, icon: techIcons[name.replace(/\s+\d+$/, '')] })),
)

const isCurrent = computed(() => !props.end)
const stackLabelId = useId()
</script>

<template>
  <!-- Timeline connector runs from this item's dot to the next one; hidden after the last item. -->
  <li
    class="relative pl-6 md:pl-9 before:absolute before:left-[7px] before:top-[26px] before:-bottom-[26px] before:w-0.5 before:bg-black/15 dark:before:bg-white/15 before:content-[''] last:before:hidden md:before:top-[34px] md:before:-bottom-[34px]"
  >
    <span
      class="absolute left-0 top-[18px] md:top-[26px] flex size-4 items-center justify-center"
      aria-hidden="true"
    >
      <span
        v-if="isCurrent"
        class="absolute inset-0 rounded-full bg-[hsl(var(--secondary)/0.55)] animate-ping motion-reduce:hidden"
      />
      <span
        class="relative size-3 rounded-full bg-[hsl(var(--secondary))]"
        :class="isCurrent ? 'ring-4 ring-secondary/25' : 'ring-2 ring-secondary/15'"
      />
    </span>

    <article
      class="grid gap-x-8 gap-y-4 rounded-xl border border-transparent px-1 py-3 md:p-5 transition-colors duration-200 hover:border-black/[0.07] hover:bg-white/40 dark:hover:border-white/[0.07] dark:hover:bg-white/[0.03] md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-x-10"
    >
      <header class="flex flex-col gap-1.5 self-start md:sticky md:top-4">
        <h2 class="text-lg md:text-xl font-bold leading-7 text-secondary text-balance">
          {{ $t(position) }}
        </h2>

        <p class="text-base font-semibold text-gray-900 dark:text-white/90">
          {{ company }}
        </p>

        <div class="mt-1 flex flex-wrap items-center gap-2">
          <p
            class="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-2.5 py-1 text-xs leading-none text-gray-700 dark:text-white/75 tabular-nums whitespace-nowrap"
          >
            <time :datetime="start">{{ formatMonthYear(start) }}</time>
            <span class="px-1">–</span>
            <time v-if="end" :datetime="end">{{ formatMonthYear(end) }}</time>
            <span v-else>{{ $t('dates.present') }}</span>
          </p>

          <span
            v-if="isCurrent"
            class="inline-flex items-center gap-1.5 rounded-full border border-secondary/40 bg-[hsl(var(--secondary)/0.1)] px-2 py-1 text-[11px] font-semibold uppercase leading-none tracking-wide text-secondary"
          >
            <span class="size-1.5 rounded-full bg-[hsl(var(--secondary))]" aria-hidden="true" />
            {{ $t('experience.current') }}
          </span>
        </div>
      </header>

      <div class="flex min-w-0 flex-col gap-5">
        <ul
          class="flex max-w-[70ch] flex-col gap-3 leading-relaxed text-gray-800 dark:text-white/80"
        >
          <li
            v-for="description in descriptions"
            :key="description"
            class="relative pl-4 md:pl-5 before:absolute before:left-0.5 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-[hsl(var(--secondary)/0.75)] before:content-['']"
          >
            {{ $t(description) }}
          </li>
        </ul>

        <div
          v-if="techs.length"
          class="flex flex-col gap-2 border-t border-dashed border-black/10 pt-4 dark:border-white/10"
        >
          <p
            :id="stackLabelId"
            class="text-[10px] uppercase tracking-widest font-semibold text-gray-600 dark:text-white/70"
          >
            {{ $t('experience.stack') }}
          </p>
          <ul class="flex flex-wrap gap-1.5" :aria-labelledby="stackLabelId">
            <TechChip v-for="tech in techs" :key="tech.name" :name="tech.name" :icon="tech.icon" />
          </ul>
        </div>
      </div>
    </article>
  </li>
</template>
