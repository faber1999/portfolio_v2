<script setup lang="ts">
import IconBachelorCap from '@/components/icons/IconBachelorCap.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import CourseOrCertificate from './components/CourseOrCertificate.vue'
import HigherEducation from './components/HigherEducation.vue'

const higherEducation = [
  {
    title: 'education.systems-engineer',
    descriptions: ['education.systems-engineer-description'],
    month: 'months.october',
    year: 2022,
  },
  {
    title: 'education.adsi',
    descriptions: ['education.adsi-description', 'education.adsi-description-2'],
    month: 'months.september',
    year: 2019,
  },
  {
    title: 'education.technical-bachelor',
    descriptions: ['education.technical-bachelor-description'],
    month: 'months.november',
    year: 2015,
  },
]

const coursesCertifications = [
  {
    title: 'TypeScript: Tu completa guía y manual de mano',
    month: 'months.may',
    year: 2024,
    platformName: 'Udemy',
    credentialId: 'UC-4f24131e-0412-49fd-892f-18721982df70',
    certificationUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-4f24131e-0412-49fd-892f-18721982df70.jpg?v=1715661647000',
  },
  {
    title: 'OpenAI: Ejercicios prácticos y asistentes con React + NestJS',
    month: 'months.may',
    year: 2024,
    platformName: 'Udemy',
    credentialId: 'UC-8313f32c-06d5-4c3c-9bb6-03fbef462141',
    certificationUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-8313f32c-06d5-4c3c-9bb6-03fbef462141.jpg?v=1716453768000',
  },
  {
    title: 'Curso: Zustand - Gestor de estado para React',
    month: 'months.april',
    year: 2024,
    platformName: 'Udemy',
    credentialId: 'UC-b7ac48ed-ba23-47d0-bc9a-ad6f88af4177',
    certificationUrl:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-b7ac48ed-ba23-47d0-bc9a-ad6f88af4177.jpg?v=1713852930000',
  },
  {
    title: 'DevOps Essentials Professional Certificate (DEPC) - (Spanish)',
    month: 'months.april',
    year: 2021,
    platformName: 'CertiProf',
    credentialId: 'FLTLLPSLJP-DSFJDKJL-WHBZWTZHHK',
    certificationUrl: 'https://drive.google.com/file/d/1_lwH0M6hKAAnOzy4b9_QQvUP5tWaHWhM/view',
  },
  {
    title: 'SCRUM MASTER PROFESSIONAL CERTIFICATE (SMPC)',
    month: 'months.july',
    year: 2020,
    platformName: 'CertiProf',
    credentialId: '41578698457861',
    certificationUrl: 'https://drive.google.com/file/d/15g-INIwUDEs2siSQIM8y8G1u35K8Z2EZ/view',
  },
]
</script>

<template>
  <div class="flex flex-col flex-1 h-fit min-h-full gap-4 xl:flex-row max-h-full">
    <div class="flex flex-col gap-6 bg-tertiary p-4 rounded-lg w-full xl:w-1/2">
      <div
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconBachelorCap class="size-10" />

        {{ $t('education.higher-education') }}
      </div>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <ol class="relative overflow-y-active">
        <HigherEducation v-for="item in higherEducation" :key="item.title" v-bind="item" />
      </ol>
    </div>

    <div class="flex flex-col gap-6 bg-tertiary p-4 rounded-lg w-full xl:w-1/2">
      <div
        class="flex flex-col items-center gap-2 text-primary self-center text-xl md:flex-row md:text-2xl lg:text-3xl"
      >
        <IconDiploma class="size-10" />
        {{ $t('education.courses-certifications') }}
      </div>

      <hr class="border-black/20 w-10/12 self-center dark:border-white/15" />

      <ol class="relative overflow-y-active">
        <CourseOrCertificate
          v-for="item in coursesCertifications"
          :key="item.title"
          v-bind="item"
        />
      </ol>
    </div>
  </div>
</template>
