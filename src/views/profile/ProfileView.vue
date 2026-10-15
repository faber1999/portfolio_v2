<script setup lang="ts">
import FlipWords from '@/components/inspira-ui/FlipWords.vue'
import SkillsResume from './components/SkillsResume.vue'
import ContactLinks from './components/ContactLinks.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { getYearsOfExperience } from '@/lib/utils'
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_DISPLAY, whatsappUrl } from './contact'

const { locale, t } = useI18n()

const roles = computed(() => t('profile.role').split(' · '))

const whatsappLink = computed(() => whatsappUrl(t('profile.whatsapp-message')))

// Self-hosted PDFs (public/cv) so the `download` attribute works (it is ignored cross-origin).
const cvFileName = computed(() => `Faber-Grajales-CV-${locale.value === 'en' ? 'en' : 'es'}.pdf`)
const cvLink = computed(() => `${import.meta.env.BASE_URL}cv/${cvFileName.value}`)

const yearsOfExperience = getYearsOfExperience()
</script>

<template>
  <div class="flex flex-col flex-1 min-h-full gap-6">
    <div class="surface-panel bg-tertiary rounded-2xl">
      <div class="flex justify-center p-5 md:p-8 lg:p-10 dark:text-white">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 md:mb-2">
            <div
              class="shrink-0 rounded-full bg-gradient-to-br from-secondary to-tertiary p-[3px] shadow-[0_10px_40px_-12px_hsl(var(--secondary)/0.55)]"
            >
              <img
                src="/images/profile.avif"
                alt="Faber Grajales"
                width="176"
                height="176"
                class="block rounded-full size-28 md:size-40 lg:size-44 brightness-125 saturate-[1.20]"
              />
            </div>

            <div
              class="flex flex-col items-center md:items-start text-center md:text-start gap-4 min-w-0"
            >
              <p
                class="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 dark:border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium leading-none text-emerald-800 dark:text-emerald-300"
              >
                <span class="relative flex size-2" aria-hidden="true">
                  <span
                    class="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping"
                  />
                  <span class="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {{ $t('profile.available') }}
              </p>

              <div class="flex flex-col gap-2">
                <h1
                  class="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight text-balance leading-tight"
                >
                  <span class="text-gray-700 dark:text-white/80">{{ $t('profile.greeting') }}</span>
                  {{ ' ' }}
                  <span class="title">Faber Grajales</span>
                </h1>

                <!-- Roles stack below lg (no orphaned "·"), inline with a separator from lg up. -->
                <p
                  class="flex flex-col lg:flex-row lg:flex-wrap items-center md:items-start justify-center md:justify-start lg:gap-x-2 text-base md:text-lg 2xl:text-xl font-medium text-gray-700 dark:text-white/75"
                >
                  <template v-for="(role, i) in roles" :key="role">
                    <span v-if="i > 0" class="hidden lg:inline" aria-hidden="true">·</span>
                    <span v-if="i > 0" class="sr-only">, </span>
                    <span>{{ role }}</span>
                  </template>
                </p>
              </div>

              <div
                class="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 w-full sm:w-auto mt-1"
              >
                <a
                  :href="cvLink"
                  :download="cvFileName"
                  type="application/pdf"
                  class="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[hsl(var(--secondary))] px-5 text-base font-bold text-white dark:text-black shadow-md shadow-black/10 transition duration-200 hover:brightness-110 hover:shadow-lg active:brightness-95"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-5 shrink-0"
                  >
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                    <path d="M14 3v5h5" />
                    <path d="M12 11v6m0 0-2.5-2.5M12 17l2.5-2.5" />
                  </svg>
                  {{ $t('profile.download-cv') }}
                  <span class="text-xs font-semibold opacity-80"
                    >({{ $t('profile.cv-file-hint') }})</span
                  >
                </a>

                <span
                  class="hidden lg:block h-6 w-px bg-black/15 dark:bg-white/15"
                  aria-hidden="true"
                />

                <ContactLinks />
              </div>
            </div>
          </div>

          <div class="flex flex-col text-base lg:text-lg leading-relaxed gap-4">
            <p>{{ $t('profile.description-1', { years: yearsOfExperience }) }}</p>

            <p>{{ $t('profile.description-2') }}</p>

            <div>
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
            </div>
          </div>

          <hr class="border-black/20 dark:border-white/15" />

          <div class="grid lg:grid-cols-2 gap-6 2xl:text-xl">
            <section id="contact" aria-labelledby="profile-contact-heading" class="scroll-mt-6">
              <h2
                id="profile-contact-heading"
                class="title text-xl 2xl:text-2xl font-semibold mb-4"
              >
                {{ $t('profile.contact-info') }}
              </h2>

              <ul class="flex flex-col gap-2">
                <li>
                  <span class="font-semibold">{{ $t('profile.email') }}: </span>
                  <a
                    class="font-normal break-all underline underline-offset-[5px]"
                    :href="`mailto:${CONTACT_EMAIL}`"
                  >
                    {{ CONTACT_EMAIL }}
                  </a>
                </li>
                <li>
                  <span class="font-semibold">{{ $t('profile.whatsapp') }}: </span>
                  <a
                    class="font-normal underline underline-offset-[5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="whatsappLink"
                  >
                    {{ WHATSAPP_DISPLAY }}
                    <span class="sr-only">{{ $t('profile.new-tab') }}</span>
                  </a>
                </li>
                <li>
                  <span class="font-semibold">{{ $t('profile.linkedin') }}: </span>
                  <a
                    class="font-normal underline underline-offset-[5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="LINKEDIN_URL"
                  >
                    in/faber1999
                    <span class="sr-only">{{ $t('profile.new-tab') }}</span>
                  </a>
                </li>
                <li>
                  <span class="font-semibold">{{ $t('profile.github') }}: </span>
                  <a
                    class="font-normal underline underline-offset-[5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="GITHUB_URL"
                  >
                    faber1999
                    <span class="sr-only">{{ $t('profile.new-tab') }}</span>
                  </a>
                </li>
              </ul>
            </section>

            <section aria-labelledby="profile-location-heading">
              <h2
                id="profile-location-heading"
                class="title text-xl 2xl:text-2xl font-semibold mb-4"
              >
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
            </section>
          </div>

          <hr class="border-black/20 dark:border-white/15" />

          <section aria-labelledby="profile-languages-heading">
            <h2
              id="profile-languages-heading"
              class="title text-xl 2xl:text-2xl font-semibold mb-4"
            >
              {{ $t('profile.languages') }}
            </h2>

            <ul class="grid grid-cols-2 gap-4">
              <li class="flex flex-col">
                <h3 class="text-lg font-semibold dark:text-white">
                  {{ $t('profile.spanish') }}
                </h3>
                <span class="text-sm dark:text-white">{{ $t('profile.native') }}</span>
              </li>

              <li class="flex flex-col">
                <h3 class="text-lg font-semibold dark:text-white">
                  {{ $t('profile.english') }}
                </h3>
                <span class="text-sm dark:text-white">B2</span>
              </li>
            </ul>
          </section>

          <hr class="border-black/20 dark:border-white/15" />

          <section aria-labelledby="profile-availability-heading" class="flex flex-col 2xl:text-xl">
            <h2
              id="profile-availability-heading"
              class="title text-xl 2xl:text-2xl font-semibold mb-4"
            >
              {{ $t('profile.availability') }}
            </h2>

            <ul class="grid gap-3 grid-cols-1 sm:grid-cols-2">
              <li class="leading-relaxed">
                {{ $t('profile.status') }}:
                <span class="title font-semibold">{{ $t('profile.status-value') }}</span>
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
          </section>
        </div>
      </div>
    </div>

    <section
      aria-labelledby="profile-skills-heading"
      class="surface-panel flex flex-col bg-tertiary rounded-2xl p-5 gap-6 md:p-8 lg:p-10 2xl:text-xl dark:text-white"
    >
      <h2 id="profile-skills-heading" class="title text-xl 2xl:text-2xl font-semibold">
        {{ $t('profile.technical-skills') }}
      </h2>

      <hr class="border-black/20 dark:border-white/15" />

      <SkillsResume />
    </section>
  </div>
</template>
