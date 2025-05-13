<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconEn from './icons/IconEn.vue'
import IconEs from './icons/IconEs.vue'
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'
import { ref, watch } from 'vue'

const { locale } = useI18n()

const isDark = ref(document.documentElement.classList.contains('dark'))

watch(
  isDark,
  (newValue) => {
    requestAnimationFrame(() => {
      if (newValue) {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('data-theme', 'black')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('data-theme', 'white')
      }
    })
  },
  { immediate: true },
)

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
      <div
        class="block cursor-pointer hover:bg-white/20 p-2 rounded-full"
        @click="isDark = !isDark"
      >
        <Transition name="fade" mode="out-in" :duration="250">
          <IconSun class="size-6" v-if="isDark" />
          <IconMoon class="size-6 text-blue-800" v-else />
        </Transition>
      </div>

      <div class="block cursor-pointer hover:bg-white/20 p-2 rounded-full" @click="changeLang">
        <IconEs class="size-6" v-if="locale === 'es'" />
        <IconEn class="size-6" v-else />
      </div>
    </div>
  </header>
</template>
