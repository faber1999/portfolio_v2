<script setup lang="ts">
// import ContentUnderConstruction from '@/components/ContentUnderConstruction.vue'
import FlipWords from '@/components/inspira-ui/FlipWords.vue'
import SkillsResume from './components/SkillsResume.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { getYearsOfExperience } from '@/lib/utils'

const { locale } = useI18n()

const whatsappTranslatedMsg = computed(() => {
  let messageToReturn = '¡Hola, Faber! Visité tu portafolio y me gustaría charlar contigo'

  if (locale.value === 'en') {
    messageToReturn = 'Hello,  Faber! I visited your portfolio and would like to chat with you'
  }

  return encodeURIComponent(messageToReturn)
})

const cvLink = computed(() => {
  const baseUrl = 'https://drive.google.com/uc?export=download&id='
  let fileId = '1j0rDlFk4bUIquDW9fZSR5CV4V9pmxJKO'

  if (locale.value === 'en') {
    fileId = '16OAbeOGTiEYngzwPwg1j67M_xtBDXUUc'
  }

  return `${baseUrl}${fileId}`
})

const yearsOfExperience = getYearsOfExperience()
</script>

<template>
  <div class="flex flex-col flex-1 min-h-full gap-6">
    <div class="surface-panel bg-tertiary rounded-2xl">
      <div class="flex justify-center p-5 md:p-8 lg:p-10 dark:text-white">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col md:flex-row self-center md:self-start items-center gap-6">
            <img
              src="/images/profile.avif"
              alt="Faber Grajales"
              class="rounded-full size-36 md:size-44 shrink-0 brightness-125 saturate-[1.20] shadow-xl ring-4 ring-white/50 dark:ring-white/10"
            />

            <div
              class="flex flex-col text-center font-semibold gap-2 md:gap-4 text-xl md:text-start 2xl:text-2xl"
            >
              <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
                {{ $t('profile.title') }}
              </h1>

              <span> {{ $t('profile.role') }} </span>

              <a
                download
                :href="cvLink"
                class="cv-link font-bold w-fit self-center md:self-start mt-2"
              >
                {{ $t('profile.download-cv') }}
                <span class="absolute bottom-0 left-0 h-[2px] title-decorator" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div class="flex flex-col text-base lg:text-lg leading-relaxed gap-4">
            <span> {{ $t('profile.description-1', { years: yearsOfExperience }) }} </span>

            <span> {{ $t('profile.description-2') }} </span>

            <span>
              {{ $t('profile.main-skills') }}:
              <FlipWords
                :words="[
                  'leadership',
                  'communication',
                  'decision-making',
                  'management',
                  'planning',
                  'adaptability',
                  'teamwork',
                  'innovation',
                  'optimization',
                ]"
                :duration="1500"
                class="font-semibold"
              />
            </span>
          </div>

          <hr class="border-black/20 dark:border-white/15" />

          <div class="grid lg:grid-cols-2 gap-6 2xl:text-xl">
            <div>
              <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
                {{ $t('profile.contact-info') }}
              </h2>

              <ul class="flex flex-col gap-2">
                <li>
                  <span class="font-semibold">{{ $t('profile.email') }}: </span>
                  <a class="font-normal break-all" href="mailto:fabergrajales1999@gmail.com">
                    fabergrajales1999@gmail.com
                  </a>
                </li>
                <li>
                  <span class="font-semibold">Whatsapp: </span>
                  <a
                    class="font-normal underline underline-offset-[5px]"
                    aria-label="Chat on WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="`https://wa.me/573146310397?text=${whatsappTranslatedMsg}`"
                  >
                    (+57) 314 631 0397
                  </a>
                </li>
                <!-- Linkedin -->
                <li>
                  <span class="font-semibold">LinkedIn: </span>
                  <a
                    class="font-normal underline underline-offset-[5px]"
                    aria-label="LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/faber1999/"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
                {{ $t('profile.location') }}
              </h2>

              <ul class="flex flex-col gap-2">
                <li>
                  <span class="font-semibold">{{ $t('profile.city') }}: </span>
                  <span class="font-normal">Armenia (Quindío)</span>
                </li>
                <li>
                  <span class="font-semibold">{{ $t('profile.country') }}: </span>
                  <span class="font-normal">Colombia</span>
                </li>
                <li>
                  <span class="font-semibold">{{ $t('profile.timezone') }}: </span>
                  <span class="font-normal">GMT-5</span>
                </li>
              </ul>
            </div>
          </div>

          <hr class="border-black/20 dark:border-white/15" />

          <div>
            <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
              {{ $t('profile.languages') }}
            </h2>

            <!-- Added grid for languages -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col">
                <span class="text-lg font-semibold dark:text-white">
                  {{ $t('profile.spanish') }}
                </span>
                <span class="text-sm dark:text-white">
                  {{ $t('profile.native') }}
                </span>
              </div>

              <div class="flex flex-col">
                <span class="text-lg font-semibold dark:text-white">
                  {{ $t('profile.english') }}
                </span>
                <span class="text-sm dark:text-white">B2</span>
              </div>
            </div>
          </div>

          <hr class="border-black/20 dark:border-white/15" />

          <div class="flex flex-col 2xl:text-xl">
            <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
              {{ $t('profile.availability') }}
            </h2>

            <ul class="grid gap-3 grid-cols-1 sm:grid-cols-2">
              <li class="leading-relaxed">
                {{ $t('profile.status') }}:
                <span class="title font-semibold">{{ $t('profile.status-value') }}!</span>
              </li>
              <li class="leading-relaxed">
                {{ $t('profile.work-type') }}:
                <span class="title font-semibold">{{ $t('profile.work-type-value') }}</span>
              </li>
              <li class="leading-relaxed">
                {{ $t('profile.remote-work') }}:
                <span class="title font-semibold">{{ $t('profile.remote-work-value') }}</span>
              </li>
              <li class="leading-relaxed">
                {{ $t('profile.relocation') }}:
                <span class="title font-semibold">{{ $t('profile.relocation-value') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="surface-panel flex flex-col bg-tertiary rounded-2xl p-5 gap-6 md:p-8 lg:p-10 2xl:text-xl dark:text-white"
    >
      <h2 class="title text-xl 2xl:text-2xl font-semibold">
        {{ $t('profile.technical-skills') }}
      </h2>

      <hr class="border-black/20 dark:border-white/15" />

      <SkillsResume />
    </div>
  </div>
</template>
