<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import router from './router'

const mode = useColorMode()
mode.value = 'dark'

router.beforeEach((to) => {
  const { title, description } = to.meta

  const defaultTitle = 'Default Title'
  const defaultDescription = 'Default Description'

  document.title = `${title}` || defaultTitle

  const descriptionElement = document.querySelector('head meta[name="description"]')

  descriptionElement?.setAttribute('content', `${description}` || defaultDescription)
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
