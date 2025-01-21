<script setup lang="ts">
import IconPageNotFound from '@/components/icons/IconPageNotFound.vue'
</script>

<template>
  <div class="flex size-full justify-center items-center rounded-xl bg-tertiary p-4">
    <div class="flex flex-col justify-around items-center gap-10 w-4/5 lg:w-2/4">
      <IconPageNotFound class="w-32 text-secondary" />

      <div class="flex flex-col items-center gap-4">
        <h1 class="text-4xl font-bold text-primary">404</h1>

        <p class="text-xl text-secondary">
          {{ $t('404.title') }}
        </p>

        <p class="text-gray-500 dark:text-gray-400 text-center">
          {{ $t('404.sub-title') }}
        </p>
        <router-link to="/" class="title">
          <span class="relative title font-bold">
            {{ $t('404.back-profile') }}
            <span
              class="absolute -bottom-1 left-0 w-full h-[1px] title-decorator"
              aria-hidden="true"
            ></span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
