<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useRoute } from 'vue-router'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconWorkBag from '@/components/icons/IconWorkBag.vue'
import IconProjects from '@/components/icons/IconProjects.vue'
import IconEducation from '@/components/icons/IconEducation.vue'
import {
  actionClass,
  accentActionClass,
  neutralActionClass,
} from '@/views/projects/components/ProjectLinks.vue'

const route = useRoute()

// Show the human-readable path (e.g. accents) but never throw on malformed escapes.
const requestedPath = computed(() => {
  try {
    return decodeURI(route.fullPath)
  } catch {
    return route.fullPath
  }
})

const sections: { to: string; label: string; icon: Component }[] = [
  { to: '/', label: 'menu.profile', icon: IconProfile },
  { to: '/experience', label: 'menu.experience', icon: IconWorkBag },
  { to: '/projects', label: 'menu.projects', icon: IconProjects },
  { to: '/education', label: 'menu.education', icon: IconEducation },
]
</script>

<template>
  <section
    class="surface-panel flex min-h-full w-full items-center justify-center rounded-2xl bg-tertiary px-5 py-8 md:p-10"
    aria-labelledby="not-found-title"
  >
    <div class="flex w-full max-w-xl flex-col items-center text-center">
      <!-- Decorative numeral; the code is announced inside the h1 for screen readers. -->
      <p
        class="not-found-code title select-none text-[5rem] font-extrabold leading-none tracking-tighter sm:text-9xl xl:[@media(min-height:820px)]:text-[10rem]"
        aria-hidden="true"
      >
        404
      </p>

      <h1
        id="not-found-title"
        class="mt-3 text-balance text-2xl sm:mt-4 font-bold text-primary md:text-3xl"
      >
        <span class="sr-only">404 · </span>{{ $t('notFound.title') }}
      </h1>

      <p class="mt-2 text-balance text-gray-700 dark:text-gray-300">
        {{ $t('notFound.description') }}
      </p>

      <p class="mt-4 flex max-w-full flex-wrap items-center justify-center gap-2 text-xs">
        <span class="text-gray-600 dark:text-gray-400">{{ $t('notFound.requested-path') }}</span>
        <code
          class="max-w-full break-all rounded-md border border-black/10 bg-black/[0.04] px-2 py-0.5 font-mono text-gray-800 dark:border-white/15 dark:bg-white/10 dark:text-white/85"
          >{{ requestedPath }}</code
        >
      </p>

      <div class="mt-6 flex w-full flex-wrap justify-center gap-2 sm:w-auto">
        <router-link to="/" :class="[actionClass, accentActionClass]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-3.5 shrink-0"
            aria-hidden="true"
          >
            <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" />
          </svg>
          {{ $t('notFound.back-home') }}
        </router-link>
        <router-link
          :to="{ path: '/', hash: '#contact' }"
          :class="[actionClass, neutralActionClass]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-3.5 shrink-0"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {{ $t('notFound.contact-me') }}
        </router-link>
      </div>

      <hr class="my-6 w-10/12 sm:my-8 border-black/15 dark:border-white/15" />

      <nav class="w-full" aria-labelledby="not-found-sections">
        <h2
          id="not-found-sections"
          class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          {{ $t('notFound.quick-links') }}
        </h2>
        <ul class="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <li v-for="section in sections" :key="section.to">
            <router-link
              :to="section.to"
              class="group flex h-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/40 px-2 py-2.5 text-sm sm:flex-col sm:py-3 font-semibold text-gray-800 transition-colors duration-200 hover:border-secondary/60 hover:bg-[hsl(var(--secondary)/0.08)] hover:text-secondary dark:border-white/10 dark:bg-white/5 dark:text-white/85"
            >
              <component
                :is="section.icon"
                class="size-5 shrink-0 text-gray-600 sm:size-6 transition-colors duration-200 group-hover:text-secondary dark:text-white/60"
              />
              {{ $t(section.label) }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>
/* Gentle float on the numeral; skipped entirely for reduced-motion users. */
@media (prefers-reduced-motion: no-preference) {
  .not-found-code {
    animation: not-found-float 6s ease-in-out infinite;
  }
}

@keyframes not-found-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
</style>
