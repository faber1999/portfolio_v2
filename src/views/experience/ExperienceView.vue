<script setup lang="ts">
import ExperienceItem from './components/ExperienceItem.vue'
import IconComputerCode from '@/components/icons/IconComputerCode.vue'
import { experience } from '@/data/experience'
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
