<script setup lang="ts">
import ParticlesBg from '@/components/inspira-ui/ParticlesBg.vue'
import MyAside from '@/components/MyAside.vue'
import MyHeader from '@/components/MyHeader.vue'
import { useDeviceType } from '@/composables/useDeviceType'
import { useDark } from '@vueuse/core'

const isDark = useDark()

const { isMobile } = useDeviceType()
</script>

<template>
  <div class="relative flex flex-row flex-1 min-h-0 bg-primary text-primary">
    <div class="size-full flex flex-row">
      <main class="flex flex-col-reverse z-10 relative min-h-0 size-full md:flex-row">
        <MyAside />

        <div class="mx-auto flex flex-col flex-1 min-w-0 min-h-0 max-w-[1600px]">
          <MyHeader />

          <div
            class="flex flex-col flex-1 min-h-0 px-4 md:px-8 pb-6 overflow-x-hidden overflow-y-auto"
            id="content"
          >
            <slot />
          </div>
        </div>
      </main>
    </div>

    <ParticlesBg
      class="absolute z-0 size-full pointer-events-none"
      :quantity="isMobile ? 150 : 300"
      :ease="100"
      :color="isDark ? '#404040' : '#adadad'"
      :staticity="20"
      refresh
    />
  </div>
</template>
