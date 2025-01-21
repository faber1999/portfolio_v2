<script setup lang="ts">
import ContentUnderConstruction from '@/components/ContentUnderConstruction.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import BorderBeam from '@/components/inspira-ui/BorderBeam.vue'
import FlipWords from '@/components/inspira-ui/FlipWords.vue'
</script>

<template>
  <div class="flex flex-col flex-1 h-full min-h-full gap-4 xl:flex-row">
    <div class="relative bg-tertiary rounded-lg w-full xl:w-3/5 xl:h-auto xl:overflow-hidden">
      <BorderBeam :size="250" :duration="12" :delay="9" :border-width="2" />

      <div class="flex size-full justify-center dark:text-white p-4 xl:overflow-y-active">
        <div class="flex flex-col gap-10">
          <div class="flex self-center mt-4 items-center gap-10">
            <IconProfile class="size-20 lg:size-40" />
            <div class="flex flex-col gap-2 md:text-xl lg:text-2xl">
              <span>
                {{ $t('profile.title') }}
              </span>
              <span> {{ $t('profile.status') }}</span>
            </div>
          </div>

          <span class="md:text-xl lg:text-2xl"> {{ $t('profile.description-1') }}: </span>

          <span class="md:text-xl lg:text-2xl"> {{ $t('profile.description-2') }}: </span>

          <span class="md:text-xl lg:text-2xl">
            {{ $t('profile.main-skills') }}:
            <FlipWords
              :words="[
                'leadership',
                'communication',
                'decision-making',
                'management',
                'planning',
                'adaptability',
                'teamwork',
                'innovation',
                'optimization',
              ]"
              :duration="2000"
              class="!text-secondary font-semibold"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col gap-4 xl:w-2/5 xl:h-auto">
      <div
        class="relative overflow-hidden flex size-full bg-tertiary rounded-lg justify-center items-center text-2xl xl:text-4xl dark:text-white"
      >
        <ContentUnderConstruction />
      </div>
      <div
        class="relative overflow-hidden flex size-full bg-tertiary rounded-lg justify-center items-center text-2xl xl:text-4xl dark:text-white"
      >
        <ContentUnderConstruction />
      </div>
    </div>
  </div>
</template>
