<script setup lang="ts">
import { supportedLocales } from '@/langs'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import IconTranslate from './icons/IconTranslate.vue'

const { locale } = useI18n()

const isCollapsed = ref(false)
const pickerRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (pickerRef.value && !pickerRef.value.contains(event.target as Node)) {
    isCollapsed.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="pickerRef"
    v-on:click="isCollapsed = !isCollapsed"
    class="flex flex-col absolute gap-6 max-h-6 overflow-hidden transition-all duration-500 cursor-pointer"
    :class="{ 'max-h-[8rem]': isCollapsed }"
  >
    <div>
      <IconTranslate />
    </div>

    <img
      class="cursor-pointer h-6 w-6"
      v-for="sLocale in supportedLocales"
      v-on:click="() => (locale = sLocale)"
      :key="`locale-${sLocale}`"
      :src="`/${sLocale}.svg`"
      :alt="sLocale"
    />
  </div>
</template>
