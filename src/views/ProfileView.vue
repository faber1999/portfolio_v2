<script setup lang="ts">
import ContentUnderConstruction from '@/components/ContentUnderConstruction.vue'
import FlipWords from '@/components/inspira-ui/FlipWords.vue'
</script>

<template>
  <div class="flex flex-col flex-1 h-full min-h-full gap-4 xl:flex-row">
    <div class="relative bg-tertiary rounded-lg w-full xl:w-3/5 xl:h-auto xl:overflow-hidden">
      <!-- <BorderBeam :size="250" :duration="12" :delay="9" :border-width="2" /> -->

      <div class="flex size-full justify-center dark:text-white p-4 md:p-12 xl:overflow-y-active">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col md:flex-row w-full self-center items-center gap-10">
            <img
              src="/images/profile.webp"
              alt="Profile"
              class="rounded-full size-44 brightness-125 saturate-[1.20] 2xl:size-60 shadow-2xl dark:shadow-sm"
            />

            <div
              class="flex flex-col text-center font-semibold gap-2 text-xl md:text-start 2xl:text-2xl"
            >
              <span>
                {{ $t('profile.title') }}
              </span>

              <span>
                {{ $t('profile.im-from') }}
                <img class="inline-block align-baseline" src="/flags/CO.png" title="Colombia" />
              </span>

              <span>
                {{ $t('profile.status') }}:
                <span class="title font-bold">{{ $t('profile.status-value') }}</span>
              </span>
            </div>
          </div>

          <div class="flex flex-col 2xl:text-2xl gap-10">
            <span> {{ $t('profile.description-1') }} </span>

            <span> {{ $t('profile.description-2') }} </span>

            <span>
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
                class="font-semibold"
              />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col gap-4 xl:w-2/5 xl:h-auto">
      <div
        class="relative overflow-hidden flex size-full rounded-lg justify-center items-center dark:text-white"
      >
        <ContentUnderConstruction />
      </div>
      <div
        class="relative overflow-hidden flex size-full rounded-lg justify-center items-center dark:text-white"
      >
        <ContentUnderConstruction />
      </div>
    </div>
  </div>
</template>
