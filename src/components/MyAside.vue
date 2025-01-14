<script setup lang="ts">
import { routes } from '@/router'
import { RouterLink } from 'vue-router'
import DynamicIcon from './DynamicIcon.vue'

const { isAsideOpen } = defineProps<{
  isAsideOpen: boolean
}>()
</script>

<template>
  <aside
    class="bg-secondary flex flex-col w-0 opacity-0 justify-center gap-8 rounded-r-3xl transition-all duration-500"
    :class="{
      'w-24': isAsideOpen,
      'opacity-100': isAsideOpen,
    }"
  >
    <RouterLink
      class="w-full px-5 self-center"
      v-for="route in routes.filter((route) => route.meta?.icon)"
      v-slot="{ isActive }"
      :key="route.path"
      :to="route.path"
    >
      <div
        :title="$t(`menu.${route.name?.toString()}`)"
        class="flex flex-col justify-center align-middle items-center gap-1 text-black dark:text-white"
        style="transition: all 0.3s allow-discrete"
        :class="{
          hidden: !isAsideOpen,
        }"
      >
        <div
          class="flex justify-center w-full items-center aspect-square rounded-full transition-all duration-300"
          :class="{
            'hover:bg-white/25': !isActive,
            'bg-gray-500/30 dark:bg-white shadow-white/25 shadow-lg  dark:text-black ': isActive,
          }"
        >
          <DynamicIcon :icon="route.meta?.icon" />
        </div>

        <div class="text-sm max-w-20 truncate">
          {{ $t(`menu.${route.name?.toString()}`) }}
        </div>
      </div>
    </RouterLink>
  </aside>
</template>
