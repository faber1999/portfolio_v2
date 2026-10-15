<script setup lang="ts">
import { ref } from 'vue'
import { useTranslate, type Translations } from '@/composables/useTranslate'
import TechStack from './TechStack.vue'

export interface Lang {
  name: string
  icon?: string
  abbreviation?: string
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

const actionClass =
  'inline-flex h-8 grow sm:grow-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-xs font-semibold transition-colors duration-200'
const neutralActionClass =
  'border-black/15 dark:border-white/20 text-gray-800 dark:text-white/85 hover:border-black/30 dark:hover:border-white/40 hover:bg-black/[0.04] dark:hover:bg-white/10'

// Screenshots close to the 16:9 frame fill it (cropped from the top); images far from it
// (square logos, very tall/wide captures) are shown whole over a blurred copy of themselves.
const isContained = ref(false)
function onPreviewLoad(event: Event) {
  const img = event.target as HTMLImageElement
  if (!img.naturalWidth || !img.naturalHeight) return
  const ratio = img.naturalWidth / img.naturalHeight
  isContained.value = ratio < 1.25 || ratio > 2.4
}
</script>

<template>
  <article
    class="project-card group/card self-stretch h-full rounded-2xl border border-black/10 dark:border-white/10 bg-secondary p-5 flex flex-col gap-4 w-full min-w-0 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:border-secondary/50 hover:shadow-lg motion-safe:hover:-translate-y-0.5"
  >
    <div class="flex items-center justify-between gap-3 min-h-7">
      <h3 class="text-xl font-bold title min-w-0 truncate" :title="name">{{ name }}</h3>
      <span
        v-if="isPrivate"
        class="shrink-0 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-800 dark:text-amber-400 border border-amber-400/40 leading-none"
      >
        {{ $t('projects.private') }}
      </span>
    </div>

    <button
      v-if="previewGif"
      type="button"
      class="project-preview group/media relative isolate"
      tabindex="-1"
      :aria-label="`${$t('projects.view-details')}: ${name}`"
      aria-haspopup="dialog"
      @click="$emit('select')"
    >
      <img
        v-if="isContained"
        :src="previewGif"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 -z-10 size-full object-cover scale-125 blur-2xl opacity-30"
      />
      <img
        :src="previewGif"
        :alt="`${name} preview`"
        loading="lazy"
        decoding="async"
        :class="[
          'size-full transition-transform duration-300 ease-out motion-safe:group-hover/media:scale-[1.04]',
          isContained ? 'object-contain p-3 drop-shadow-lg' : 'object-cover object-top',
        ]"
        @load="onPreviewLoad"
      />
    </button>

    <p
      class="text-sm text-gray-700 dark:text-white/70 leading-relaxed line-clamp-3 min-h-[calc(3*1.625em)]"
      :title="translate(description)"
    >
      {{ translate(description) }}
    </p>

    <div class="flex flex-wrap items-center gap-2">
      <button
        type="button"
        :class="[actionClass, neutralActionClass]"
        aria-haspopup="dialog"
        @click="$emit('select')"
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
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
        {{ $t('projects.view-details') }}
        <span class="sr-only">: {{ name }}</span>
      </button>
      <a
        v-if="demoUrl"
        :href="demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        :class="actionClass"
        class="border-secondary/70 text-secondary hover:border-secondary hover:bg-[hsl(var(--secondary)/0.1)]"
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
      </a>
    </div>

    <div v-if="techs && Object.keys(techs).length" class="flex flex-col gap-4">
      <hr class="border-black/10 dark:border-white/10" />
      <TechStack :techs="techs" />
    </div>
  </article>
</template>
