<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue'

const props = defineProps<{
  icon?: () => Promise<{ default: Component }>
}>()

const iconResolver = props.icon ? defineAsyncComponent(() => props.icon!()) : null
</script>

<template>
  <div v-if="iconResolver">
    <component :is="iconResolver" :class="$props.class" />
  </div>
</template>
