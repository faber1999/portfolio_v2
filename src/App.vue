<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import router from './router'

router.beforeEach(() => {
  setTimeout(() => {
    document.querySelector('#content')?.scrollTo({ top: 0, behavior: 'instant' })
  }, 500)
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length

  to.meta.transition = toDepth < fromDepth ? to.meta.transition : to.meta.transition
})
</script>

<template>
  <MainLayout>
    <RouterView v-slot="{ Component }">
      <transition :name="($route.meta.transition as string) ?? 'fade'" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </MainLayout>
</template>
