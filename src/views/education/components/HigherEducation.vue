<script setup lang="ts">
import { useDateFormat, type YearMonth } from '@/composables/useDateFormat'

interface Props {
  title: string
  descriptions: string[]
  /** Graduation date, e.g. "2022-10" */
  date: YearMonth
}

defineProps<Props>()

const { formatMonthYear } = useDateFormat()
</script>

<template>
  <li>
    <article
      class="timeline-item relative ml-8 md:ml-10 pb-8 grid before:absolute before:left-[-23px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-6"
    >
      <div class="relative pb-4 md:col-span-2">
        <div class="flex flex-col gap-1">
          <span
            class="text-secondary -left-[30px] -top-[10px] absolute rounded-full text-5xl"
            aria-hidden="true"
          >
            •
          </span>

          <h3 class="text-lg font-bold text-secondary text-balance">
            {{ $t(title) }}
          </h3>

          <time :datetime="date" class="text-sm break-words text-gray-700 dark:text-white/80">
            {{ formatMonthYear(date) }}
          </time>
        </div>
      </div>
      <div
        class="relative flex flex-col gap-4 pb-4 leading-relaxed text-gray-800 dark:text-white/80 md:col-span-3"
      >
        <p v-for="description in descriptions" :key="description">
          {{ $t(description) }}
        </p>
      </div>
    </article>
  </li>
</template>
