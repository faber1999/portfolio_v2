<script setup lang="ts">
import IconProjects from './icons/IconBuilding.vue'
</script>

<template>
  <div class="flex size-full justify-center items-center rounded-xl bg-tertiary p-4">
    <div class="flex flex-col justify-around items-center gap-6 w-4/5 lg:w-2/4 text-center">
      <h1 class="text-xl lg:text-2xl font-bold text-secondary title">
        {{ $t('under-construction.title') }}
      </h1>

      <IconProjects class="w-24 md:w-28 text-primary" />

      <div class="flex flex-col items-center gap-4">
        <p class="text-secondary">
          {{ $t('under-construction.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
