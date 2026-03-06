<script setup lang="ts">
import { useTranslate } from '@/composables/useTranslate'
import type { Lang, Detail } from './ProjectCard.vue'
import type { Translations } from '@/composables/useTranslate'

defineProps<{
  open: boolean
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  previewGif?: string
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}>()

defineEmits<{ close: [] }>()

const translate = useTranslate()
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-2xl flex flex-col gap-5 px-6 py-4 pointer-events-auto"
          @click.stop
        >
          <!-- Title + badge -->
          <div class="flex items-center">
            <div class="flex items-center gap-3 flex-1">
              <h2 class="text-2xl font-bold title">{{ name }}</h2>
              <span
                v-if="isPrivate"
                class="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-500 dark:text-amber-400 border border-amber-400/40"
              >
                Private
              </span>
            </div>

            <!-- Close button -->
            <button
              class="size-6 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors text-gray-600 dark:text-white/70 flex items-center justify-center text-lg"
              @click="$emit('close')"
            >
              ×
            </button>
          </div>

          <!-- GIF preview -->
          <img
            v-if="previewGif"
            :src="previewGif"
            :alt="`${name} preview`"
            class="rounded-xl max-h-72 w-fit self-center h-auto object-cover block"
          />

          <!-- Detail sections -->
          <template v-if="detail?.length">
            <hr class="border-black/10 dark:border-white/10" />

            <div v-for="(item, i) in detail" :key="i">
              <img
                v-if="item.img"
                :src="item.img"
                :alt="`${name} detail ${i + 1}`"
                class="rounded-xl h-auto object-cover w-full mb-3 sm:w-auto sm:max-w-[50%] sm:mb-2 sm:mt-1.5"
                :class="{
                  'sm:float-left sm:mr-4': i % 2 === 0,
                  'sm:float-right sm:ml-4': i % 2 !== 0,
                }"
              />
              <p
                class="text-sm text-gray-700 dark:text-white/70 leading-relaxed whitespace-pre-line"
              >
                {{ translate(item.description) }}
              </p>

              <hr class="border-black/10 dark:border-white/10 mt-4 clear-both" />
            </div>
          </template>

          <!-- Tech stack -->
          <template v-if="techs && Object.keys(techs).length">
            <div v-for="(langs, category) in techs" :key="category" class="flex flex-col gap-2">
              <span
                class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/70 font-semibold"
              >
                {{ category }}
              </span>
              <div class="flex gap-3 flex-wrap items-end">
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
                    class="text-[10px] text-gray-500 dark:text-white/70 transition-opacity duration-200 group-hover:opacity-100 opacity-60"
                  >
                    {{ lang.name }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
