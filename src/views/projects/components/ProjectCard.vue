<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'
import { useTranslate, type Translations } from '@/composables/useTranslate'
import TechStack from './TechStack.vue'
import ProjectLinks, { actionClass, neutralActionClass } from './ProjectLinks.vue'
import { mediaSize } from '../media'

export interface Lang {
  name: string
  icon?: string
  abbreviation?: string
}

export interface Detail {
  img?: string
  description: Translations
}

export interface PreviewVideo {
  webm?: string
  mp4?: string
}

const props = defineProps<{
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  /** Still image for the card/modal; doubles as the poster when `previewVideo` is set. */
  previewImage?: string
  previewVideo?: PreviewVideo
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}>()

defineEmits<{ select: [] }>()

const translate = useTranslate()
const reducedMotion = usePreferredReducedMotion()
const showVideo = computed(() => !!props.previewVideo && reducedMotion.value !== 'reduce')
const previewSize = computed(() => mediaSize(props.previewImage))

// Screenshots close to the 16:9 frame fill it (cropped from the top); images far from it
// (square logos, very tall/wide captures) are shown whole over a blurred copy of themselves.
// Known sizes decide up front; unknown images decide once they load.
const loadedRatio = ref<number | null>(null)
const isContained = computed(() => {
  const { width, height } = previewSize.value
  const ratio = width && height ? width / height : loadedRatio.value
  return ratio !== null && (ratio < 1.25 || ratio > 2.4)
})
function onPreviewLoad(event: Event) {
  const img = event.target as HTMLImageElement
  if (img.naturalWidth && img.naturalHeight) loadedRatio.value = img.naturalWidth / img.naturalHeight
}
</script>

<template>
  <article
    class="project-card group/card self-stretch h-full rounded-2xl border border-black/10 dark:border-white/10 bg-secondary p-4 sm:p-5 flex flex-col gap-4 w-full min-w-0 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:border-secondary/50 hover:shadow-lg motion-safe:hover:-translate-y-0.5"
  >
    <div class="flex items-center justify-between gap-3 min-h-7">
      <h2 class="text-xl font-bold title min-w-0 truncate" :title="name">{{ name }}</h2>
      <span
        v-if="isPrivate"
        class="shrink-0 text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-800 dark:text-amber-400 border border-amber-400/40 leading-none"
      >
        {{ $t('projects.private') }}
      </span>
    </div>

    <button
      v-if="previewImage || previewVideo"
      type="button"
      class="project-preview group/media relative isolate"
      tabindex="-1"
      :aria-label="`${$t('projects.view-details')}: ${name}`"
      aria-haspopup="dialog"
      @click="$emit('select')"
    >
      <video
        v-if="showVideo"
        :poster="previewImage"
        v-bind="previewSize"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        aria-hidden="true"
        class="size-full object-cover object-top transition-transform duration-300 ease-out motion-safe:group-hover/media:scale-[1.04]"
      >
        <source v-if="previewVideo?.webm" :src="previewVideo.webm" type="video/webm" />
        <source v-if="previewVideo?.mp4" :src="previewVideo.mp4" type="video/mp4" />
      </video>
      <template v-else-if="previewImage">
        <img
          v-if="isContained"
          :src="previewImage"
          alt=""
          aria-hidden="true"
          v-bind="previewSize"
          loading="lazy"
          decoding="async"
          class="absolute inset-0 -z-10 size-full object-cover scale-125 blur-2xl opacity-30"
        />
        <img
          :src="previewImage"
          :alt="$t('projects.preview-alt', { name })"
          v-bind="previewSize"
          loading="lazy"
          decoding="async"
          :class="[
            'size-full transition-transform duration-300 ease-out motion-safe:group-hover/media:scale-[1.04]',
            isContained ? 'object-contain p-3 drop-shadow-lg' : 'object-cover object-top',
          ]"
          @load="onPreviewLoad"
        />
      </template>
    </button>

    <p
      class="text-sm text-gray-700 dark:text-white/70 leading-relaxed line-clamp-3 min-h-[calc(3*1.625em)]"
      :title="translate(description)"
    >
      {{ translate(description) }}
    </p>

    <ProjectLinks :name="name" :demo-url="demoUrl" :github-url="githubUrl">
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
    </ProjectLinks>

    <div v-if="techs && Object.keys(techs).length" class="flex flex-col gap-4">
      <hr class="border-black/10 dark:border-white/10" />
      <TechStack :techs="techs" />
    </div>
  </article>
</template>
