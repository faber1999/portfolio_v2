<script setup lang="ts">
import ExperienceItem from './components/ExperienceItem.vue'
import IconComputerCode from '@/components/icons/IconComputerCode.vue'

const experience = [
  {
    position: 'experience.job-3-position',
    company: 'Celuweb.com S.A.S.',
    period: [
      {
        month: 'months.march',
        year: 2022,
      },
      {
        isCurrent: true,
      },
    ],
    descriptions: ['experience.job-3-description-1', 'experience.job-3-description-2'],
  },
  {
    position: 'experience.job-2-position',
    company: 'Sophos Solutions',
    period: [
      {
        month: 'months.may',
        year: 2021,
      },
      {
        month: 'months.march',
        year: 2022,
      },
    ],
    descriptions: ['experience.job-2-description-1', 'experience.job-2-description-2'],
  },
  {
    position: 'experience.job-1-position',
    company: 'Celuweb.com S.A.S.',
    period: [
      {
        month: 'months.june',
        year: 2018,
      },
      {
        month: 'months.april',
        year: 2021,
      },
    ],
    descriptions: ['experience.job-1-description-1', 'experience.job-1-description-2'],
  },
]
</script>

<template>
  <div class="flex flex-col flex-1 h-fit min-h-full gap-4 xl:flex-row max-h-full">
    <div class="flex flex-col gap-6 bg-tertiary p-4 rounded-lg w-full">
      <div
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconComputerCode class="size-10" />

        {{ $t('experience.work-experience') }}
      </div>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <ol class="relative overflow-y-active">
        <ExperienceItem v-for="item in experience" :key="item.position" v-bind="item" />
      </ol>
    </div>
  </div>
</template>
