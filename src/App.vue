<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

// With `mode="out-in"` the next view mounts right after the old one leaves, so resetting the
// scroll container here lands the new page at the top without a hard-coded timeout.
function scrollContentToTop() {
  document.getElementById('content')?.scrollTo({ top: 0, behavior: 'instant' })
}

// #content is the scroll container (not the window), so router scrollBehavior can't handle
// hash links like `/#contact`; scroll the target into view once the view has entered.
function scrollToHash() {
  if (!route.hash) return
  try {
    document.querySelector(route.hash)?.scrollIntoView({ block: 'start' })
  } catch {
    // Invalid selector in the hash: ignore.
  }
}

watch(
  () => route.hash,
  () => nextTick(scrollToHash),
)
</script>

<template>
  <MainLayout>
    <RouterView v-slot="{ Component, route: viewRoute }">
      <transition
        :name="(viewRoute.meta.transition as string) ?? 'fade'"
        mode="out-in"
        @after-leave="scrollContentToTop"
        @after-enter="scrollToHash"
      >
        <component :is="Component" :key="viewRoute.path"></component>
      </transition>
    </RouterView>
  </MainLayout>
</template>
