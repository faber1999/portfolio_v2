<script setup lang="ts">
import LinkPreview from '@/components/inspira-ui/LinkPreview.vue'
import { useDeviceType } from '@/composables/useDeviceType'

interface Props {
  title: string
  month: string
  year: number

  platformName?: string

  credentialId?: string
  certificationUrl?: string
}

defineProps<Props>()

const { isMobile } = useDeviceType()
</script>

<template>
  <li>
    <div
      class="relative ml-12 pb-2 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:gap-10 md:space-x-4]"
    >
      <div class="relative pb-8">
        <div>
          <span class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
            >•</span
          >

          <div class="flex flex-col gap-3">
            <h3 class="text-lg font-bold text-secondary">
              {{ $t(title) }}
            </h3>

            <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
              >{{ `${platformName} (${$t(month)} - ${year})` }}
            </time>

            <span class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
              {{ `${$t('education.credential-id')}: ${credentialId}` }}
            </span>

            <LinkPreview :url="certificationUrl" :width="280" :height="200" v-if="!isMobile">
              <span
                class="bg-gradient-to-br from-secondary to-orange-500 bg-clip-text font-bold text-transparent"
              >
                {{ $t('education.view-credential') }}
                <span
                  class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-br from-secondary to-orange-500"
                  aria-hidden="true"
                ></span>
              </span>
            </LinkPreview>

            <a
              v-else
              :href="certificationUrl"
              target="_blank"
              class="relative font-bold text-transparent bg-gradient-to-br from-secondary to-orange-500 bg-clip-text w-fit"
            >
              {{ $t('education.view-credential') }}
              <span
                class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-br from-secondary to-orange-500"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
