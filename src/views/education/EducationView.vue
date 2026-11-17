<script setup lang="ts">
import IconBachelorCap from '@/components/icons/IconBachelorCap.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import { coursesCertifications, higherEducation } from '@/data/education'
import CourseOrCertificate from './components/CourseOrCertificate.vue'
import HigherEducation from './components/HigherEducation.vue'
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
