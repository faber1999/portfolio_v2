<script setup lang="ts">
import { routes } from '@/router'
import { capitalize } from 'vue'
import { RouterLink } from 'vue-router'
import DynamicIcon from './DynamicIcon.vue'

const { isAsideOpen } = defineProps<{
  isAsideOpen: boolean
}>()
</script>

<template>
  <aside
    class="flex flex-col w-0 opacity-0 justify-center gap-10 mx-2 transition-all duration-500"
    :class="{
      'w-16': isAsideOpen,
      'opacity-100': isAsideOpen,
    }"
  >
    <RouterLink v-for="route in routes" :key="route.path" :to="route.path" v-slot="{ isActive }">
      <div
        class="flex flex-col items-center gap-1 text-white"
        style="transition: all 0.3s allow-discrete"
        :class="{
          hidden: !isAsideOpen,
        }"
      >
        <div
          class="flex justify-center items-center w-14 aspect-square rounded-full transition-all duration-300"
          :class="{
            'hover:bg-white/25': !isActive,
            'bg-white text-black shadow-white/25 shadow-lg': isActive,
          }"
        >
          <DynamicIcon :icon="route.meta?.icon" />
        </div>

        <div class="text-sm text-pretty">
          {{ capitalize(route.name as string) }}
        </div>
      </div>
    </RouterLink>
  </aside>
</template>
