<script setup lang="ts">
import { computed, ref, watch, nextTick, onBeforeUnmount } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'
import { useTranslate } from '@/composables/useTranslate'
import type { Lang, Detail, PreviewVideo } from './ProjectCard.vue'
import type { Translations } from '@/composables/useTranslate'
import TechStack from './TechStack.vue'
import ProjectLinks, { neutralActionClass } from './ProjectLinks.vue'
import { mediaSize } from '../media'

const props = defineProps<{
  open: boolean
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  previewImage?: string
  previewVideo?: PreviewVideo
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}>()

const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement | null>(null)
let previousFocus: HTMLElement | null = null
watch(
  () => props.open,
  async (open) => {
    if (open) {
      previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
      await nextTick()
      if (!dialog.value?.open) dialog.value?.showModal()
    } else if (dialog.value?.open) {
      dialog.value.close()
      previousFocus?.focus()
    }
  },
  // Immediate so a deep link (?project=...) opens the dialog on first render.
  { immediate: true },
)
onBeforeUnmount(() => {
  dialog.value?.close()
  previousFocus?.focus()
})

const translate = useTranslate()
const reducedMotion = usePreferredReducedMotion()

// The hero repeats the card preview; skip a still image that the gallery below already shows.
const showHeroImage = computed(
  () =>
    !props.previewVideo &&
    !!props.previewImage &&
    !props.detail?.some((item) => item.img === props.previewImage),
)
</script>

<template>
  <Teleport to="body">
    <!-- Native dialog provides focus containment and Escape handling. -->

    <dialog
      ref="dialog"
      class="project-dialog"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-summary"
      @cancel.prevent="emit('close')"
      @click="
        (event) => {
          if (event.target === dialog) emit('close')
        }
      "
    >
      <div
        class="relative w-full max-w-3xl max-h-[85dvh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-2xl flex flex-col gap-5 px-4 py-5 sm:px-8 sm:py-6 pointer-events-auto"
        @click.stop
      >
        <!-- Title + badge + summary -->
        <div class="flex items-start gap-3">
          <div class="flex flex-col gap-2 flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-3 min-h-11">
              <h2 id="project-dialog-title" class="text-2xl font-bold title">{{ name }}</h2>
              <span
                v-if="isPrivate"
                class="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-800 dark:text-amber-400 border border-amber-400/40"
              >
                {{ $t('projects.private') }}
              </span>
            </div>
            <p
              id="project-dialog-summary"
              class="text-sm sm:text-base text-gray-700 dark:text-white/75 leading-relaxed"
            >
              {{ translate(description) }}
            </p>
          </div>

          <button
            type="button"
            :aria-label="$t('projects.close')"
            :title="$t('projects.close')"
            autofocus
            :class="[
              neutralActionClass,
              'size-11 shrink-0 inline-flex items-center justify-center rounded-full border transition-colors duration-200',
            ]"
            @click="$emit('close')"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Hero preview (video, or a still image that is not repeated in the gallery) -->
        <div v-if="previewVideo" class="w-full max-w-xl self-center">
          <video
            :poster="previewImage"
            v-bind="mediaSize(previewImage)"
            :autoplay="reducedMotion !== 'reduce'"
            :controls="reducedMotion === 'reduce'"
            muted
            loop
            playsinline
            preload="metadata"
            :aria-label="$t('projects.preview-alt', { name })"
            class="block w-full h-auto rounded-xl"
          >
            <source v-if="previewVideo.webm" :src="previewVideo.webm" type="video/webm" />
            <source v-if="previewVideo.mp4" :src="previewVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <img
          v-else-if="showHeroImage"
          :src="previewImage"
          :alt="$t('projects.preview-alt', { name })"
          v-bind="mediaSize(previewImage)"
          decoding="async"
          class="rounded-xl max-h-72 w-auto max-w-full h-auto self-center object-contain block"
        />

        <!-- Detail sections -->
        <template v-if="detail?.length">
          <hr class="border-black/10 dark:border-white/10" />

          <div v-for="(item, i) in detail" :key="i">
            <img
              v-if="item.img"
              :src="item.img"
              :alt="$t('projects.detail-alt', { name, n: i + 1 })"
              v-bind="mediaSize(item.img)"
              loading="lazy"
              decoding="async"
              class="rounded-xl h-auto object-cover w-full mb-3 sm:w-auto sm:max-w-[50%] sm:mb-2 sm:mt-1.5"
              :class="{
                'sm:float-left sm:mr-4': i % 2 === 0,
                'sm:float-right sm:ml-4': i % 2 !== 0,
              }"
            />
            <p class="text-sm text-gray-700 dark:text-white/70 leading-relaxed whitespace-pre-line">
              {{ translate(item.description) }}
            </p>

            <hr class="border-black/10 dark:border-white/10 mt-4 clear-both" />
          </div>
        </template>

        <!-- Tech stack -->
        <TechStack v-if="techs && Object.keys(techs).length" :techs="techs" />

        <!-- Footer actions -->
        <template v-if="demoUrl || githubUrl">
          <hr class="border-black/10 dark:border-white/10" />
          <ProjectLinks :name="name" :demo-url="demoUrl" :github-url="githubUrl" />
        </template>
      </div>
    </dialog>
  </Teleport>
</template>
