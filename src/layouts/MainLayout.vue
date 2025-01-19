<script setup lang="ts">
import ParticlesBg from '@/components/inspira-ui/ParticlesBg.vue'
import MyAside from '@/components/MyAside.vue'
import MyHeader from '@/components/MyHeader.vue'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value == 'dark')
</script>

<template>
  <div class="relative flex flex-row flex-1 bg-primary">
    <div class="size-full flex flex-row">
      <main class="z-10 relative max-h-full flex flex-col-reverse size-full md:flex-row">
        <MyAside />

        <div class="flex flex-col flex-grow max-h-full overflow-y-auto">
          <MyHeader />

          <div class="flex rounded-3xl flex-1 p-4 overflow-y-auto">
            <slot />
          </div>
        </div>
      </main>
    </div>

    <ParticlesBg
      class="absolute z-0 size-full"
      :quantity="150"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="20"
      refresh
    />
  </div>
</template>
