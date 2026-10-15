<script setup lang="ts">
import { routes } from '@/router'
import { RouterLink } from 'vue-router'
import DynamicIcon from './DynamicIcon.vue'

const navRoutes = routes.filter((route) => route.meta?.icon)
</script>

<template>
  <nav
    :aria-label="$t('a11y.main-nav')"
    class="portfolio-nav flex shrink-0 bg-secondary p-2 h-min z-10 rounded-t-3xl"
    :class="'md:relative md:flex-col md:w-24 md:h-full md:rounded-tl-none md:rounded-r-3xl md:justify-center md:gap-8 md:p-0'"
  >
    <!-- custom + v-slot: render our own <a> so aria-current lands on the focusable link. -->
    <RouterLink
      v-for="route in navRoutes"
      :key="route.path"
      :to="route.path"
      custom
      v-slot="{ href, navigate, isExactActive }"
    >
      <a
        :href="href"
        :aria-current="isExactActive ? 'page' : undefined"
        class="nav-link w-full self-center md:px-4 rounded-2xl"
        @click="navigate"
      >
        <div
          class="flex flex-col justify-center align-middle items-center gap-1 text-primary py-1"
          :class="{
            'text-secondary font-semibold': isExactActive,
          }"
        >
          <div
            class="flex justify-center w-11 md:w-14 items-center aspect-square rounded-full transition-all duration-200"
            :class="{
              'hover:bg-gray-300/40 dark:hover:bg-black/20': !isExactActive,
              'bg-secondary/15 dark:bg-black/35 shadow-secondary/20 dark:shadow-black/45 shadow-md':
                isExactActive,
            }"
          >
            <DynamicIcon class="size-6" :icon="route.meta?.icon" />
          </div>

          <div class="text-xs md:text-sm font-medium max-w-full">
            {{ $t(`menu.${route.name?.toString()}`) }}
          </div>
        </div>
      </a>
    </RouterLink>
  </nav>
</template>
