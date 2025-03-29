<script setup lang="ts">
// import ContentUnderConstruction from '@/components/ContentUnderConstruction.vue'
import FlipWords from '@/components/inspira-ui/FlipWords.vue'
import SkillsResume from './components/SkillsResume.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const whatsappTranslatedMsg = computed(() => {
  let messageToReturn = '¡Hola, Faber! Visité tu portafolio y me gustaría charlar contigo'

  if (locale.value === 'en') {
    messageToReturn = 'Hello,  Faber! I visited your portfolio and would like to chat with you'
  }

  return encodeURIComponent(messageToReturn)
})
</script>

<template>
  <div class="flex flex-col flex-1 h-full min-h-full gap-4 xl:flex-row">
    <div class="relative bg-tertiary rounded-lg w-full xl:w-1/2 xl:h-auto xl:overflow-y-active">
      <div class="flex justify-center dark:text-white p-4 md:p-12">
        <div class="flex flex-col gap-8 w-full">
          <div class="flex flex-col md:flex-row w-full self-center items-center gap-6">
            <img
              src="/images/profile.avif"
              alt="Profile"
              class="rounded-full size-44 brightness-125 saturate-[1.20] 2xl:size-60 shadow-2xl dark:shadow-sm"
            />

            <div
              class="flex flex-col text-center font-semibold gap-2 md:gap-4 text-xl md:text-start 2xl:text-2xl"
            >
              <span>
                {{ $t('profile.title') }}
              </span>

              <span> Full Stack Developer </span>

              <a
                download
                href="https://drive.google.com/uc?export=download&id=1j0rDlFk4bUIquDW9fZSR5CV4V9pmxJKO"
                class="relative font-bold title w-fit cursor-pointer self-center md:self-start"
              >
                {{ $t('profile.download-cv') }}
                <span
                  class="absolute bottom-0 left-0 w-full h-[2px] title-decorator"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div class="flex flex-col 2xl:text-2xl gap-6">
            <span> {{ $t('profile.description-1') }} </span>

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
                <span class="text-sm dark:text-white">B1</span>
              </div>
            </div>
          </div>

          <hr class="border-black/20 dark:border-white/15" />

          <div class="flex flex-col gap-8 2xl:text-xl">
            <div>
              <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
                {{ $t('profile.contact-info') }}
              </h2>

              <ul class="flex flex-col gap-2">
                <li>
                  <span class="font-semibold">{{ $t('profile.email') }}: </span>
                  <span class="font-normal"> fabergrajales1999@gmail.com </span>
                </li>
                <li>
                  <span class="font-semibold">Whatsapp: </span>
                  <a
                    class="font-normal underline underline-offset-[5px]"
                    aria-label="Chat on WhatsApp"
                    target="_blank"
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
                    href="https://www.linkedin.com/in/faber-grajales-hincapi%C3%A9-3919b6198/"
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
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col gap-4 xl:w-1/2 xl:h-auto">
      <div
        class="flex xl:flex-shrink flex-col gap-4 bg-tertiary relative xl:overflow-y-active rounded-lg dark:text-white p-4 md:p-12"
      >
        <div class="flex flex-col gap-6 2xl:text-xl">
          <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
            {{ $t('profile.availability') }}...
          </h2>

          <ul class="grid w-full text-sm md:text-base 2xl:text-2xl gap-2 grid-cols-2">
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.status') }}:
              <span class="title font-semibold truncate">{{ $t('profile.status-value') }}!</span>
            </li>
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.work-type') }}:
              <span class="title font-semibold">{{ $t('profile.work-type-value') }}</span>
            </li>
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.remote-work') }}:
              <span class="title font-semibold truncate">{{
                $t('profile.remote-work-value')
              }}</span>
            </li>
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.relocation') }}:
              <span class="title font-semibold truncate">{{ $t('profile.relocation-value') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex xl:flex-1 flex-col gap-4 bg-tertiary relative xl:overflow-y-active rounded-lg dark:text-white p-4 md:p-12"
      >
        <div class="flex flex-col gap-6 2xl:text-xl">
          <h2 class="title text-xl 2xl:text-2xl font-semibold mb-4">
            {{ $t('profile.technical-skills') }}
          </h2>
          <SkillsResume />
        </div>
      </div>
    </div>
  </div>
</template>
