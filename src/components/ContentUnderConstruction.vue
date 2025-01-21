<script setup lang="ts">
import IconProjects from './icons/IconBuilding.vue'
</script>

<template>
  <div class="flex size-full justify-center items-center rounded-xl bg-tertiary p-4">
    <div class="flex flex-col justify-around items-center gap-10 w-4/5 lg:w-2/4 text-center">
      <h1 class="text-3xl lg:text-4xl font-bold text-secondary title">
        {{ $t('under-construction.title') }}
      </h1>

      <IconProjects class="w-32 text-primary" />

      <div class="flex flex-col items-center gap-4">
        <p class="text-xl text-secondary">
          {{ $t('under-construction.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
