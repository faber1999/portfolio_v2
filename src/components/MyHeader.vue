<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'
import IconEn from './icons/IconEn.vue'
import IconEs from './icons/IconEs.vue'
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'
import HyperText from './inspira-ui/HyperText.vue'

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
  <header
    class="lg:bg-transparent flex relative items-center flex-row h-16 p-4 justify-between dark:text-white"
  >
    <div class="flex items-center gap-2">
      <HyperText
        :text="$t('header.portfolio')"
        class="my-8 md:text-3xl lg:text-4xl"
        :duration="800"
        :animate-on-hover="true"
      />
    </div>

    <div class="flex gap-0 lg:gap-2">
      <div class="block cursor-pointer hover:bg-white/20 p-2 rounded-full" @click="changeColorMode">
        <IconSun v-if="isDark" />
        <IconMoon v-else />
      </div>

      <div class="block cursor-pointer hover:bg-white/20 p-2 rounded-full" @click="changeLang">
        <IconEs v-if="locale === 'es'" />
        <IconEn v-else />
      </div>
    </div>
  </header>
</template>
