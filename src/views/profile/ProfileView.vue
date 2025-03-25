<script setup lang="ts">
// import ContentUnderConstruction from '@/components/ContentUnderConstruction.vue'
import FlipWords from '@/components/inspira-ui/FlipWords.vue'
import DottedMap from './components/DottedMap.vue'
import SkillsResume from './components/SkillsResume.vue'
</script>

<template>
  <div class="flex flex-col flex-1 h-full min-h-full gap-4 xl:flex-row">
    <div class="relative bg-tertiary rounded-lg w-full xl:w-1/2 xl:h-auto xl:overflow-hidden">
      <!-- <BorderBeam :size="250" :duration="12" :delay="9" :border-width="2" /> -->

      <div class="flex justify-center dark:text-white p-4 md:p-12 xl:overflow-y-active">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col md:flex-row w-full self-center items-center gap-10">
            <img
              src="/images/profile.avif"
              alt="Profile"
              class="rounded-full size-44 brightness-125 saturate-[1.20] 2xl:size-60 shadow-2xl dark:shadow-sm"
            />

            <div
              class="flex flex-col text-center font-semibold gap-2 md:gap-4 text-xl md:text-start 2xl:text-2xl"
            >
              <span>
                {{ $t('profile.title') }}
              </span>

              <span> Full Stack Developer </span>

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

    <div class="flex w-full flex-col gap-4 xl:w-1/2 xl:h-auto">
      <div
        class="flex xl:flex-1 flex-col gap-4 bg-tertiary min-h-96 relative overflow-y-auto rounded-lg justify-evenly items-center dark:text-white p-4 md:min-h-60"
      >
        <SkillsResume />
      </div>

      <div
        class="flex xl:flex-1 flex-col gap-4 bg-tertiary min-h-96 relative overflow-hidden rounded-lg justify-evenly items-center dark:text-white p-4 md:min-h-60"
      >
        <div class="flex flex-col w-full items-center gap-4 text-xl 2xl:text-2xl">
          <span class="title font-semibold">{{ $t('profile.availability') }}...</span>

          <ul class="grid w-full text-sm md:text-base 2xl:text-lg gap-2 grid-cols-2 font-medium">
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.work-type') }}:
              <span class="title font-semibold">{{ $t('profile.work-type-value') }}</span>
            </li>
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.remote-work') }}:
              <span class="title font-semibold truncate">{{
                $t('profile.remote-work-value')
              }}</span>
            </li>
            <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.relocation') }}:
              <span class="title font-semibold truncate">{{ $t('profile.relocation-value') }}</span>
            </li>
            <!-- <li class="text-nowrap overflow-x-hidden truncate">
              {{ $t('profile.status') }}:
              <span class="title font-semibold truncate">{{ $t('profile.available') }}</span>
            </li> -->
          </ul>
        </div>

        <div class="h-full aspect-square">
          <DottedMap />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.location-card h2 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.location-card ul {
  list-style-type: none;
  padding: 0;
}

.location-card li {
  margin: 0.25rem 0;
}
</style>
