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
      class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
    >
      <div class="relative pb-8 md:col-span-2">
        <div>
          <span class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
            >•</span
          >

          <h3 class="text-lg font-bold text-secondary">
            {{ $t(title) }}
          </h3>

          <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
            >{{ `${$t(month)} - ${year}` }}
          </time>
        </div>
      </div>
      <div class="relative flex flex-col gap-6 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        <span v-for="description in descriptions" :key="description">
          {{ $t(description) }}
        </span>
      </div>
    </div>
  </li>
</template>
