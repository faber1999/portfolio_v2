<script setup lang="ts">
interface Props {
  position: string
  company: string
  period: {
    month?: string
    year?: number
    isCurrent?: boolean
  }[]
  descriptions: string[]
}

defineProps<Props>()
</script>

<template>
  <li>
    <div
      class="timeline-item relative ml-8 md:ml-10 pb-8 grid before:absolute before:left-[-23px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-6"
    >
      <div class="relative pb-4 md:col-span-2">
        <div class="flex flex-col">
          <span class="text-secondary -left-[30px] -top-[10px] absolute rounded-full text-5xl">
            •
          </span>

          <span class="text-xl font-bold text-secondary mb-2">
            <span> {{ $t('experience.position') }}: </span>
            {{ $t(position) }}
          </span>

          <span class="text-lg font-semibold text-gray-800 dark:text-white/80">
            {{ company }}
          </span>

          <time class="p-0 m-0 text-sm break-words text-gray-700 dark:text-white/80">
            <span v-for="(item, index) in period" :key="index">
              <span v-if="item.month">{{ $t(item.month) }} {{ item.year }}</span>
              <span v-if="item.isCurrent">{{ $t('experience.current') }}</span>
              <span v-if="index !== period.length - 1"> - </span>
            </span>
          </time>
        </div>
      </div>
      <div
        class="relative flex flex-col gap-4 pb-4 leading-relaxed text-gray-800 dark:text-white/80 md:col-span-3"
      >
        <span v-for="description in descriptions" :key="description">
          {{ $t(description) }}
        </span>
      </div>
    </div>
  </li>
</template>
