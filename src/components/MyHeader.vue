<script setup lang="ts">
import { supportedLocales } from '@/langs'
import { useColorMode } from '@vueuse/core'

import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const mode = useColorMode()

const changeColorMode = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <header class="flex items-center flex-row h-16 justify-between my-2 ml-4 dark:text-white">
    <div>
      <span>{{ $t('title.portfolio') }}</span>
    </div>
    <div>
      <button v-on:click="changeColorMode">Change Color Mode</button>
      <select v-model="locale">
        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale">
          {{ sLocale }}
        </option>
      </select>
    </div>
  </header>
</template>
