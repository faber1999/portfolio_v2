<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDark } from '@vueuse/core'
import { watch } from 'vue'
import { RouterLink } from 'vue-router'
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

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
] as const
</script>

<template>
  <header
    class="flex shrink-0 justify-between items-center gap-4 px-4 py-5 md:px-8 md:py-6 text-primary"
  >
    <!-- Site title: a home link, deliberately smaller than (and not competing with) each page's h1. -->
    <!-- custom: no aria-current here, it belongs to the active link in the main nav only. -->
    <RouterLink to="/" custom v-slot="{ href, navigate }">
      <a
        :href="href"
        class="rounded-md text-lg leading-tight sm:text-xl md:text-2xl title font-bold tracking-tight"
        @click="navigate"
      >
        {{ $t('header.portfolio') }}
      </a>
    </RouterLink>
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="header-control"
        :aria-label="$t('a11y.dark-theme')"
        :aria-pressed="isDark"
        @click="isDark = !isDark"
      >
        <IconSun class="size-6" v-if="isDark" />
        <IconMoon class="size-6 text-blue-800" v-else />
      </button>

      <div
        role="group"
        :aria-label="$t('a11y.language')"
        class="flex h-11 items-center gap-0.5 rounded-full border border-black/10 bg-secondary p-1 dark:border-white/15"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          type="button"
          :lang="lang.code"
          :aria-label="lang.name"
          :aria-pressed="locale === lang.code"
          class="h-full min-w-10 rounded-full px-2.5 text-sm font-bold tracking-wide transition-colors"
          :class="
            locale === lang.code
              ? 'bg-white text-black shadow-sm dark:bg-white/20 dark:text-white'
              : 'text-black/70 hover:bg-white/60 hover:text-black dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
          "
          @click="locale = lang.code"
        >
          {{ lang.label }}
        </button>
      </div>
    </div>
  </header>
</template>
