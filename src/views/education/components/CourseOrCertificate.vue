<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LinkPreview from '@/components/inspira-ui/LinkPreview.vue'
import { useDateFormat, type YearMonth } from '@/composables/useDateFormat'

type CourseLang = 'en' | 'es'

interface Props {
  /** Official credential title, kept verbatim (it is the real name on the certificate) */
  title: string
  /** Language the official title is written in */
  lang: CourseLang
  /** Optional translation of the title, shown as a hint when the UI locale differs from `lang` */
  translatedTitle?: string
  /** Completion date, e.g. "2026-03" */
  date: YearMonth

  platformName?: string

  credentialId?: string
  certificationUrl?: string
}

const props = defineProps<Props>()

const { locale } = useI18n()
const { formatMonthYear } = useDateFormat()

const showTranslatedTitle = computed(
  () => !!props.translatedTitle && !locale.value.startsWith(props.lang),
)
</script>

<template>
  <li>
    <article
      class="timeline-item relative ml-8 md:ml-10 pb-2 grid before:absolute before:left-[-23px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:gap-6"
    >
      <div class="relative pb-8">
        <div>
          <span
            class="text-secondary -left-[30px] -top-[10px] absolute rounded-full text-5xl"
            aria-hidden="true"
          >
            •
          </span>

          <div class="flex flex-col gap-3">
            <hgroup class="flex flex-col gap-1">
              <h3 class="text-lg font-bold text-secondary text-balance" :lang="lang">
                {{ title }}
              </h3>
              <p
                v-if="showTranslatedTitle"
                class="text-sm italic text-gray-700 dark:text-white/70"
                :lang="locale"
              >
                {{ translatedTitle }}
              </p>
            </hgroup>

            <p class="text-sm break-words text-gray-700 dark:text-white/80">
              <template v-if="platformName">{{ platformName }} · </template>
              <time :datetime="date">{{ formatMonthYear(date) }}</time>
            </p>

            <p v-if="credentialId" class="text-sm break-words text-gray-800 dark:text-white/80">
              {{ `${$t('education.credential-id')}: ${credentialId}` }}
            </p>

            <!-- Hover/keyboard-focus preview on pointer devices; a plain link on touch -->
            <LinkPreview
              v-if="certificationUrl"
              :url="certificationUrl"
              :width="280"
              :height="200"
              link-class="relative inline-block"
            >
              <!-- `.title` (gradient text) must sit on its own element: the link's text color utility would override it -->
              <span class="title font-bold">{{ $t('education.view-credential') }}</span>
              <span class="sr-only"> ({{ $t('education.opens-new-tab') }})</span>
              <span
                class="absolute bottom-0 left-0 w-full h-[2px] title-decorator"
                aria-hidden="true"
              />
            </LinkPreview>
          </div>
        </div>
      </div>
    </article>
  </li>
</template>
