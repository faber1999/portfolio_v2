<script setup lang="ts">
interface Props {
  position: string
  company: string
  period: number[]
  descriptions: string[]
}

defineProps<Props>()
</script>

<template>
  <li>
    <div
      class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
    >
      <div class="relative pb-6 md:col-span-2">
        <div class="flex flex-col">
          <span class="text-secondary -left-[42px] -top-[10px] absolute rounded-full text-5xl">
            •
          </span>

          <span class="text-xl font-bold text-secondary mb-2">
            <span> {{ $t('experience.position') }}: </span>
            {{ $t(position) }}
          </span>

          <span class="text-lg font-semibold text-gray-800 dark:text-white/80">
            {{ company }}
          </span>

          <time class="p-0 m-0 text-sm text-gray-800 dark:text-white/80"
            >{{ `${period[0]} - ${period[1]}` }}
          </time>
        </div>
      </div>
      <div class="relative flex flex-col gap-6 pb-4 text-gray-800 dark:text-white/80 md:col-span-3">
        <span v-for="description in descriptions" :key="description">
          {{ $t(description) }}
        </span>
      </div>
    </div>
  </li>
</template>
