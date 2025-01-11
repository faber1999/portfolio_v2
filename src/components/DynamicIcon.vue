<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue'

const props = defineProps<{
  icon?: () => Promise<{ default: Component }>
}>()

// Resolver el componente dinámico solo si `icon` está definido
const iconResolver = props.icon ? defineAsyncComponent(() => props.icon!()) : null
</script>

<template>
  <div v-if="iconResolver">
    <component :is="iconResolver" />
  </div>
</template>
