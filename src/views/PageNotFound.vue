<script setup lang="ts">
import IconPageNotFound from '@/components/icons/IconPageNotFound.vue'
</script>

<template>
  <div class="flex size-full justify-center items-center rounded-xl bg-tertiary p-4">
    <div class="flex flex-col justify-around items-center gap-10 w-4/5 lg:w-2/4">
      <IconPageNotFound class="w-32 text-black dark:text-white" />

      <div class="flex flex-col items-center gap-4">
        <h1 class="text-4xl font-bold text-black dark:text-white">404</h1>
        <p class="text-xl text-black dark:text-white">
          {{ $t('404.title') }}
        </p>

        <p class="text-gray-500 dark:text-gray-400 text-center">
          {{ $t('404.sub-title') }}
        </p>
        <router-link to="/" class="text-primary">
          {{ $t('404.back-profile') }}
        </router-link>
      </div>
    </div>
  </div>
</template>
