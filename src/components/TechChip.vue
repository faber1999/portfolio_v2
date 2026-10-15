<script setup lang="ts">
/**
 * Pill showing a technology name with an optional logo.
 * - `icon`: decorative logo (the name is always rendered as text).
 * - `fallbackTile`: when there is no icon, show a small abbreviation tile instead of a text-only chip.
 */
withDefaults(
  defineProps<{
    name: string
    icon?: string
    abbreviation?: string
    fallbackTile?: boolean
  }>(),
  { fallbackTile: false },
)
</script>

<template>
  <li
    class="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/5 py-1 text-xs leading-none whitespace-nowrap text-gray-800 dark:text-white/85 cursor-default transition-colors duration-200 hover:border-secondary/60 hover:bg-black/[0.07] dark:hover:bg-white/10"
    :class="icon || fallbackTile ? 'pl-1.5 pr-2.5' : 'px-2.5'"
  >
    <!-- Soft light tile in dark mode keeps black logos (Next.js, Contentstack, Datadog) visible
         without a harsh white block. Decorative: the name is rendered as text next to it. -->
    <img
      v-if="icon"
      :src="icon"
      alt=""
      width="18"
      height="18"
      loading="lazy"
      decoding="async"
      class="size-[18px] shrink-0 rounded-[5px] p-[2px] object-contain dark:bg-white/80 dark:ring-1 dark:ring-white/10"
    />
    <span
      v-else-if="fallbackTile"
      aria-hidden="true"
      class="size-[18px] shrink-0 rounded-[4px] flex items-center justify-center border border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/10 text-primary text-[8px] font-bold leading-none"
    >
      {{ abbreviation ?? name.slice(0, 2) }}
    </span>
    <!-- Text-only chips keep the same height as icon chips (18px icon row). -->
    <span :class="{ 'py-[3px]': !icon && !fallbackTile }">{{ name }}</span>
  </li>
</template>
