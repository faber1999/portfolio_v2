<script setup lang="ts">
import IconBachelorCap from '@/components/icons/IconBachelorCap.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import type { YearMonth } from '@/composables/useDateFormat'
import CourseOrCertificate from './components/CourseOrCertificate.vue'
import HigherEducation from './components/HigherEducation.vue'

interface HigherEducationEntry {
  title: string
  descriptions: string[]
  date: YearMonth
}

interface CourseEntry {
  /** Official credential title, kept verbatim */
  title: string
  /** Language of the official title */
  lang: 'en' | 'es'
  /** Title in the other language, shown as a hint when the UI locale differs from `lang` */
  translatedTitle?: string
  date: YearMonth
  platformName: string
  credentialId: string
  certificationUrl: string
}

const higherEducation: HigherEducationEntry[] = [
  {
    title: 'education.systems-engineer',
    descriptions: ['education.systems-engineer-description'],
    date: '2022-10',
  },
  {
    title: 'education.adsi',
    descriptions: ['education.adsi-description', 'education.adsi-description-2'],
    date: '2019-09',
  },
  {
    title: 'education.technical-bachelor',
    descriptions: ['education.technical-bachelor-description'],
    date: '2015-11',
  },
]

const coursesCertifications: CourseEntry[] = [
  {
    title: 'Angular Pro: Lleva tus bases al siguiente nivel',
    lang: 'es',
    translatedTitle: 'Angular Pro: Take your foundations to the next level',
    date: '2026-03',
    platformName: 'Udemy',
    credentialId: 'UC-20d8cb67-4a6c-4d72-9a69-7cffabbe1860',
    certificationUrl: 'https://www.udemy.com/certificate/UC-20d8cb67-4a6c-4d72-9a69-7cffabbe1860/',
  },
  {
    title: 'English EF SET Certificate - 51/100 - B2 Upper Intermediate',
    lang: 'en',
    translatedTitle: 'Certificado de inglés EF SET - 51/100 - B2 intermedio alto',
    date: '2025-07',
    platformName: 'EF SET',
    credentialId: 'frXDBk',
    certificationUrl: 'https://cert.efset.org/frXDBk',
  },
  {
    title: 'Certified Mid-Level Vue.js Developer',
    lang: 'en',
    date: '2025-04',
    platformName: 'certificates.dev',
    credentialId: '9eca4a05-ecb4-42ca-9bb0-74d01de66fc9',
    certificationUrl:
      'https://certificates.dev/vuejs/certificates/9eca4a05-ecb4-42ca-9bb0-74d01de66fc9',
  },
  {
    title: 'TypeScript: Tu completa guía y manual de mano',
    lang: 'es',
    translatedTitle: 'TypeScript: Your complete guide and handbook',
    date: '2024-05',
    platformName: 'Udemy',
    credentialId: 'UC-4f24131e-0412-49fd-892f-18721982df70',
    certificationUrl: 'https://www.udemy.com/certificate/UC-4f24131e-0412-49fd-892f-18721982df70/',
  },
  {
    title: 'OpenAI: Ejercicios prácticos y asistentes con React + NestJS',
    lang: 'es',
    translatedTitle: 'OpenAI: Hands-on exercises and assistants with React + NestJS',
    date: '2024-05',
    platformName: 'Udemy',
    credentialId: 'UC-8313f32c-06d5-4c3c-9bb6-03fbef462141',
    certificationUrl: 'https://www.udemy.com/certificate/UC-8313f32c-06d5-4c3c-9bb6-03fbef462141/',
  },
  {
    title: 'Zustand - Gestor de estado para React',
    lang: 'es',
    translatedTitle: 'Zustand - State management for React',
    date: '2024-04',
    platformName: 'Udemy',
    credentialId: 'UC-b7ac48ed-ba23-47d0-bc9a-ad6f88af4177',
    certificationUrl: 'https://www.udemy.com/certificate/UC-b7ac48ed-ba23-47d0-bc9a-ad6f88af4177/',
  },
  {
    title: 'Angular - De cero a experto',
    lang: 'es',
    translatedTitle: 'Angular - From zero to expert',
    date: '2021-12',
    platformName: 'Udemy',
    credentialId: 'UC-71b05ea6-0fb5-486a-819a-8503b1a75326',
    certificationUrl: 'https://www.udemy.com/certificate/UC-71b05ea6-0fb5-486a-819a-8503b1a75326/',
  },
  {
    title: 'DevOps Essentials Professional Certificate (DEPC) - (Spanish)',
    lang: 'en',
    translatedTitle: 'Certificado profesional en fundamentos de DevOps (en español)',
    date: '2021-04',
    platformName: 'CertiProf',
    credentialId: 'FLTLLPSLJP-DSFJDKJL-WHBZWTZHHK',
    certificationUrl: 'https://drive.google.com/file/d/1_lwH0M6hKAAnOzy4b9_QQvUP5tWaHWhM/view',
  },
  {
    title: 'Scrum Master Professional Certificate (SMPC)',
    lang: 'en',
    translatedTitle: 'Certificado profesional de Scrum Master',
    date: '2020-07',
    platformName: 'CertiProf',
    credentialId: '41578698457861',
    certificationUrl: 'https://drive.google.com/file/d/15g-INIwUDEs2siSQIM8y8G1u35K8Z2EZ/view',
  },
]
</script>

<template>
  <div class="view-stack flex flex-col flex-1 min-h-full gap-6 xl:flex-row">
    <!-- Single page-level heading; each panel below is a section (h2) with items (h3) -->
    <h1 class="sr-only">{{ $t('menu.education') }}</h1>

    <section
      class="surface-panel flex flex-col gap-6 bg-tertiary p-5 md:p-8 rounded-2xl w-full min-w-0"
      aria-labelledby="education-higher"
    >
      <h2
        id="education-higher"
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconBachelorCap class="size-10" aria-hidden="true" />
        {{ $t('education.higher-education') }}
      </h2>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <ol class="relative">
        <HigherEducation v-for="item in higherEducation" :key="item.title" v-bind="item" />
      </ol>
    </section>

    <section
      class="surface-panel flex flex-col gap-6 bg-tertiary p-5 md:p-8 rounded-2xl w-full min-w-0"
      aria-labelledby="education-courses"
    >
      <h2
        id="education-courses"
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconDiploma class="size-10" aria-hidden="true" />
        {{ $t('education.courses-certifications') }}
      </h2>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <ol class="relative">
        <CourseOrCertificate
          v-for="item in coursesCertifications"
          :key="item.credentialId"
          v-bind="item"
        />
      </ol>
    </section>
  </div>
</template>
