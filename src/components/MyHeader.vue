<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'
import IconEn from './icons/IconEn.vue'
import IconEs from './icons/IconEs.vue'
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'

const { locale } = useI18n()

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value == 'dark')

const changeColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'

  const mobileThemeColor = document.querySelector('head meta[name="theme-color"]')
  mobileThemeColor?.setAttribute('content', colorMode.value === 'light' ? '#ffffff' : '#000000')
}

const changeLang = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
  <header class="flex flex-row justify-between items-center relative h-16 p-4 text-primary">
    <div class="flex items-center gap-2">
      <span class="my-8 text-2xl md:text-3xl lg:text-4xl title font-medium">
        {{ $t('header.portfolio') }}
      </span>
    </div>

    <div class="flex gap-0 lg:gap-2">
      <div class="block cursor-pointer hover:bg-white/20 p-2 rounded-full" @click="changeColorMode">
        <IconSun class="size-6" v-if="isDark" />
        <IconMoon class="size-6 text-blue-800" v-else />
      </div>

      <div class="block cursor-pointer hover:bg-white/20 p-2 rounded-full" @click="changeLang">
        <IconEs class="size-6" v-if="locale === 'es'" />
        <IconEn class="size-6" v-else />
      </div>
    </div>
  </header>
</template>
