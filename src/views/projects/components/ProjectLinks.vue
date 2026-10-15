<script lang="ts">
// Shared pill styles for project actions (card, modal footer, modal close button).
export const actionClass =
  'inline-flex h-8 grow sm:grow-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-xs font-semibold transition-colors duration-200'
export const neutralActionClass =
  'border-black/15 dark:border-white/20 text-gray-800 dark:text-white/85 hover:border-black/30 dark:hover:border-white/40 hover:bg-black/[0.04] dark:hover:bg-white/10'
export const accentActionClass =
  'border-secondary/70 text-secondary hover:border-secondary hover:bg-[hsl(var(--secondary)/0.1)]'
</script>

<script setup lang="ts">
defineProps<{
  name: string
  demoUrl?: string
  githubUrl?: string
}>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <!-- Extra leading actions (e.g. "View details" on the card). -->
    <slot />
    <a
      v-if="demoUrl"
      :href="demoUrl"
      target="_blank"
      rel="noopener noreferrer"
      :class="[actionClass, accentActionClass]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-3.5 shrink-0"
        aria-hidden="true"
      >
        <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
      {{ $t('projects.view-demo') }}
      <span class="sr-only">: {{ name }} ({{ $t('projects.opens-new-tab') }})</span>
    </a>
    <a
      v-if="githubUrl"
      :href="githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      :class="[actionClass, neutralActionClass]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" class="size-3.5 shrink-0" aria-hidden="true">
        <path
          d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
      {{ $t('projects.view-github') }}
      <span class="sr-only">: {{ name }} ({{ $t('projects.opens-new-tab') }})</span>
    </a>
  </div>
</template>
