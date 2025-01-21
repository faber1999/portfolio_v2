<script setup lang="ts">
import { routes } from '@/router'
import { RouterLink } from 'vue-router'
import DynamicIcon from './DynamicIcon.vue'
</script>

<template>
  <aside
    class="flex shrink bg-secondary sticky bottom-0 p-1 h-min z-10 rounded-t-3xl"
    :class="'md:relative md:flex-col md:w-24 md:h-full md:rounded-tl-none md:rounded-r-3xl md:justify-center md:gap-8 md:p-0'"
  >
    <RouterLink
      class="w-full self-center md:px-5"
      v-for="route in routes.filter((route) => route.meta?.icon)"
      v-slot="{ isActive }"
      :key="route.path"
      :to="route.path"
    >
      <div
        :title="$t(`menu.${route.name?.toString()}`)"
        class="flex flex-col justify-center align-middle items-center gap-1 text-primary"
        :class="{
          'text-secondary font-semibold': isActive,
        }"
      >
        <div
          class="flex justify-center w-14 lg:w-full items-center aspect-square rounded-full transition-all duration-500"
          :class="{
            'hover:bg-gray-300/40 dark:hover:bg-black/20': !isActive,
            'bg-gray-500/10 dark:bg-black/35 shadow-black/20 dark:shadow-black/45 shadow-md':
              isActive,
          }"
        >
          <DynamicIcon class="size-6" :icon="route.meta?.icon" />
        </div>

        <div class="text-sm max-w-20 truncate">
          {{ $t(`menu.${route.name?.toString()}`) }}
        </div>
      </div>
    </RouterLink>
  </aside>
</template>
