<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDark } from '@vueuse/core'
import { watch } from 'vue'
import IconEn from './icons/IconEn.vue'
import IconEs from './icons/IconEs.vue'
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'

const { locale } = useI18n()
const isDark = useDark()
watch(
  locale,
  (value) => {
    document.documentElement.lang = value
  },
  { immediate: true },
)
const changeLang = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
  <header
    class="flex shrink-0 justify-between items-center gap-4 px-4 py-5 md:px-8 md:py-6 text-primary"
  >
    <span class="text-2xl md:text-3xl title font-bold tracking-tight">{{
      $t('header.portfolio')
    }}</span>
    <div class="flex gap-2">
      <button
        type="button"
        class="header-control"
        :aria-label="locale === 'es' ? 'Tema oscuro' : 'Dark theme'"
        :aria-pressed="isDark"
        @click="isDark = !isDark"
      >
        <IconSun class="size-6" v-if="isDark" />
        <IconMoon class="size-6 text-blue-800" v-else />
      </button>
      <button
        type="button"
        class="header-control"
        :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a español'"
        @click="changeLang"
      >
        <IconEs class="size-6" v-if="locale === 'es'" />
        <IconEn class="size-6" v-else />
      </button>
    </div>
  </header>
</template>
