<script setup lang="ts">
import ContentUnderConstruction from '@/components/ContentUnderConstruction.vue'
import IconBachelorCap from '@/components/icons/IconBachelorCap.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
</script>

<template>
  <div class="flex flex-col flex-1 h-fit min-h-full gap-4 xl:flex-row">
    <div class="flex flex-col gap-6 bg-tertiary p-4 rounded-lg w-full xl:w-1/2">
      <div class="flex items-center gap-2 text-primary self-center text-xl lg:text-2xl">
        <IconBachelorCap class="w-10 h-10" />
        {{ $t('education.higher-education') }}
      </div>

      <ol class="relative">
        <li>
          <div
            class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
          >
            <div class="relative pb-8 md:col-span-2">
              <div>
                <span
                  class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
                  >•</span
                >

                <h3 class="text-lg font-bold text-secondary">
                  {{ $t('education.systems-engineer') }}
                </h3>
                <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
                  >{{ $t('months.october') }} - 2022</time
                >
              </div>
            </div>
            <div
              class="relative flex flex-col gap-6 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"
            >
              <span>
                {{ $t('education.systems-engineer-description') }}
              </span>
            </div>
          </div>
        </li>

        <li>
          <div
            class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
          >
            <div class="relative pb-8 md:col-span-2">
              <div>
                <span
                  class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
                  >•</span
                >

                <h3 class="text-lg font-bold text-secondary">
                  {{ $t('education.adsi') }}
                </h3>
                <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
                  >{{ $t('months.september') }} - 2019</time
                >
              </div>
            </div>
            <div
              class="relative flex flex-col gap-6 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"
            >
              <span>
                {{ $t('education.adsi-description') }}
              </span>
              <span>
                {{ $t('education.adsi-description-2') }}
              </span>
            </div>
          </div>
        </li>

        <li>
          <div
            class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
          >
            <div class="relative pb-8 md:col-span-2">
              <div>
                <span
                  class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
                  >•</span
                >

                <h3 class="text-lg font-bold text-secondary">
                  {{ $t('education.technical-bachelor') }}
                </h3>
                <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
                  >{{ $t('months.november') }} - 2015</time
                >
              </div>
            </div>
            <div
              class="relative flex flex-col gap-6 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"
            >
              <span>
                {{ $t('education.technical-bachelor-description') }}
              </span>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div class="flex flex-col gap-6 bg-tertiary p-4 rounded-lg w-full xl:w-1/2">
      <div class="flex items-center gap-2 text-primary self-center text-xl lg:text-2xl">
        <IconDiploma class="w-10 h-10" />
        {{ $t('education.courses-certifications') }}
      </div>

      <ContentUnderConstruction />

      <!-- <ol class="relative">
        <li>
          <div
            class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
          >
            <div class="relative pb-8 md:col-span-2">
              <div>
                <span
                  class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
                  >•</span
                >

                <h3 class="text-lg font-bold text-secondary">Ingeniería de Sistemas</h3>
                <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
                  >Octubre 2022</time
                >
              </div>
            </div>
            <div
              class="relative flex flex-col gap-6 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"
            >
              <span>
                Sin tener muchos recursos y con una computadora que sobrevivía a duras penas,
                comencé a estudiar en el SENA, desempeñándome con un gran rendimiento académico.
              </span>
              <span>
                Junto a otros dos compañeros representamos la regional del Quindío en las
                competencias nacionales SenaSoft (2017) en la competencia de Desarrollo web.
              </span>
            </div>
          </div>
        </li>

        <li>
          <div
            class="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
          >
            <div class="relative pb-8 md:col-span-2">
              <div>
                <span
                  class="text-secondary -left-[42px] absolute rounded-full text-[2rem] leading-none"
                  >•</span
                >

                <h3 class="text-lg font-bold text-secondary">
                  Tecnólogo en Análisis y Desarrollo de Sistemas de Información
                </h3>
                <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80"
                  >Septiembre 2019</time
                >
              </div>
            </div>
            <div
              class="relative flex flex-col gap-6 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"
            >
              <span>
                Sin tener muchos recursos y con una computadora que sobrevivía a duras penas,
                comencé a estudiar en el SENA, desempeñándome con un gran rendimiento académico.
              </span>
              <span>
                Junto a otros dos compañeros representamos la regional del Quindío en las
                competencias nacionales SenaSoft (2017) en la competencia de Desarrollo web.
              </span>
            </div>
          </div>
        </li>
      </ol> -->
    </div>
  </div>
</template>
