<script setup lang="ts">
import { useTranslate, type Translations } from '@/composables/useTranslate'

export interface Lang {
  name: string
  icon: string
}

export interface Detail {
  img?: string
  description: Translations
}

defineProps<{
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  previewGif?: string
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}>()

defineEmits<{ select: [] }>()

const translate = useTranslate()
</script>

<template>
  <div
    class="rounded-xl border border-black/10 dark:border-white/10 bg-secondary p-4 flex flex-col gap-4 w-full shadow-sm hover:border-black/20 dark:hover:border-white/20 hover:shadow-md transition-all duration-200"
  >
    <div class="flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <h3 class="text-xl font-bold title">{{ name }}</h3>
        <span
          v-if="isPrivate"
          class="shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-500 dark:bg-amber-400/20 dark:text-amber-400 border border-amber-400/40"
        >
          Private
        </span>
      </div>
    </div>

    <img
      @click="$emit('select')"
      v-if="previewGif"
      :src="previewGif"
      :alt="`${name} preview`"
      class="rounded-lg h-auto max-h-48 w-fit object-cover block self-center shadow-sm cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-md"
    />

    <p class="text-sm text-gray-700 dark:text-white/70 leading-relaxed">
      {{ translate(description) }}
    </p>

    <div class="flex flex-col sm:flex-row gap-3">
      <a
        v-if="demoUrl"
        :href="demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 text-center py-2 px-4 rounded-full text-sm font-semibold border-2 border-secondary text-secondary hover:bg-secondary/30 transition-colors duration-200"
      >
        {{ $t('projects.view-demo') }}
      </a>
      <a
        v-if="githubUrl"
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 text-center py-2 px-4 rounded-full text-sm font-semibold border border-black/20 dark:border-white/20 text-gray-700 dark:text-white/70 hover:border-black/40 dark:hover:border-white/40 transition-colors duration-200"
      >
        {{ $t('projects.view-github') }}
      </a>
    </div>

    <div v-if="techs && Object.keys(techs).length" class="flex flex-col gap-3">
      <hr class="border-black/10 dark:border-white/10" />

      <div v-for="(langs, category) in techs" :key="category" class="flex flex-col gap-2">
        <span
          class="text-[10px] uppercase tracking-widest text-gray-700 dark:text-white/80 font-semibold"
        >
          {{ category }}
        </span>

        <div class="flex gap-4 flex-wrap items-end">
          <div
            v-for="lang in langs"
            :key="lang.name"
            class="flex flex-col items-center gap-1 group cursor-default"
          >
            <img
              :src="lang.icon"
              :alt="lang.name"
              class="size-10 rounded-lg object-contain transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
            />
            <span
              class="text-[10px] text-gray-950 dark:text-white/80 transition-opacity duration-200 group-hover:opacity-100 opacity-60"
            >
              {{ lang.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
