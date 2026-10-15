<script setup lang="ts">
import type { Lang } from './ProjectCard.vue'

defineProps<{
  techs: Record<string, Lang[]>
}>()
</script>

<template>
  <div class="flex flex-col gap-3">
    <div v-for="(langs, category) in techs" :key="category" class="flex flex-col gap-1.5">
      <span
        class="text-[10px] uppercase tracking-widest text-gray-600 dark:text-white/70 font-semibold"
      >
        {{ category }}
      </span>

      <ul class="flex flex-wrap gap-1.5">
        <li
          v-for="lang in langs"
          :key="lang.name"
          class="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/5 py-1 pl-1.5 pr-2.5 text-xs leading-none whitespace-nowrap text-gray-800 dark:text-white/85 cursor-default transition-colors duration-200 hover:border-secondary/60 hover:bg-black/[0.07] dark:hover:bg-white/10"
        >
          <!-- Soft light tile in dark mode keeps black logos (Next.js, Contentstack, Datadog) visible
               without a harsh white block. Decorative: the name is rendered as text next to it. -->
          <img
            v-if="lang.icon"
            :src="lang.icon"
            alt=""
            class="size-[18px] shrink-0 rounded-[5px] p-[2px] object-contain dark:bg-white/80 dark:ring-1 dark:ring-white/10"
          />
          <span
            v-else
            aria-hidden="true"
            class="size-[18px] shrink-0 rounded-[4px] flex items-center justify-center border border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/10 text-primary text-[8px] font-bold leading-none"
          >
            {{ lang.abbreviation ?? lang.name.slice(0, 2) }}
          </span>
          <span>{{ lang.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
