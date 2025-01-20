<script setup lang="ts"></script>

<template>
  <div class="flex flex-col flex-1 h-fit min-h-full gap-4 xl:flex-row">
    <div class="bg-tertiary rounded-lg h-1/3 w-full xl:w-3/5 xl:h-auto">
      <div class="flex size-full justify-center text-2xl xl:text-4xl dark:text-white p-4">
        <div class="flex flex-col">me</div>
      </div>
    </div>

    <div class="flex h-2/3 w-full flex-col gap-4 xl:w-2/5 xl:h-auto">
      <div
        class="flex size-full bg-tertiary rounded-lg justify-center items-center text-2xl xl:text-4xl dark:text-white"
      >
        Something here
      </div>
      <div
        class="flex size-full bg-tertiary rounded-lg justify-center items-center text-2xl xl:text-4xl dark:text-white"
      >
        Map Here
      </div>
    </div>
  </div>
</template>
