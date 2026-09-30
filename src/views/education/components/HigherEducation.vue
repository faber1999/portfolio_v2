<script setup lang="ts">
interface Props {
  title: string
  descriptions: string[]
  month: string
  year: number
}

defineProps<Props>()
</script>

<template>
  <li>
    <div
      class="timeline-item relative ml-8 md:ml-10 pb-8 grid before:absolute before:left-[-23px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-6"
    >
      <div class="relative pb-4 md:col-span-2">
        <div>
          <span class="text-secondary -left-[30px] -top-[10px] absolute rounded-full text-5xl">
            •
          </span>

          <h3 class="text-lg font-bold text-secondary">
            {{ $t(title) }}
          </h3>

          <time class="p-0 m-0 text-sm break-words text-gray-700 dark:text-white/80"
            >{{ `${$t(month)} - ${year}` }}
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
