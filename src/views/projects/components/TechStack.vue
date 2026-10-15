<script setup lang="ts">
import TechChip from '@/components/TechChip.vue'
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
        {{ $t(`projects.categories.${category}`) }}
      </span>

      <ul class="flex flex-wrap gap-1.5">
        <TechChip
          v-for="lang in langs"
          :key="lang.name"
          :name="lang.name"
          :icon="lang.icon"
          :abbreviation="lang.abbreviation"
          fallback-tile
        />
      </ul>
    </div>
  </div>
</template>
