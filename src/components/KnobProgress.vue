<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed, ref, onMounted, watch, nextTick } from 'vue'

const props = defineProps<{
  /** Valor de 0 a 100 que determina el porcentaje de progreso */
  value: number
  /** Si true, los extremos del arco se muestran redondeados */
  rounded?: boolean
  /** Color inicial del gradiente (hexadecimal o variable CSS, ej: "var(--secondary)") */
  colorStart: string
  /** Color final del gradiente (hexadecimal o variable CSS, ej: "var(--tertiary)") */
  colorEnd: string
  /** Texto a mostrar en el centro del arco */
  text?: string
  /** Ancho del trazo del arco */
  strokeWidth?: number
  /** Ángulo (en grados) que abarca el arco; por defecto 180 */
  arcAngle?: number
  /** Si true, se muestra el porcentaje debajo del texto central */
  showPercentage?: boolean
}>()

// Valores por defecto
const value = props.value
const rounded = props.rounded ?? false
const colorStartProp = props.colorStart
const colorEndProp = props.colorEnd
const text = props.text ?? ''
const strokeWidth = props.strokeWidth ?? 20
const arcAngle = props.arcAngle ?? 180
const showPercentage = props.showPercentage ?? true

// Cálculos para el arco utilizando un viewBox de 200x200
const radius = computed(() => 100 - strokeWidth / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const arcLength = computed(() => (arcAngle / 360) * circumference.value)
const arcDasharray = computed(() => `${arcLength.value} ${circumference.value}`)
const rotation = computed(() => 270 - arcAngle / 2)
const arcDashoffset = computed(() => arcLength.value * (1 - value / 100))

function resolveColor(color: string): string {
  if (color.startsWith('var(')) {
    const variableName = color.slice(4, -1).trim()
    const computedColor = getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim()
    if (computedColor) {
      // Si el valor ya viene en formato rgb, se adapta a rgba
      if (computedColor.startsWith('rgb(')) {
        return computedColor
      }
      // Si viene en formato hsl con función, insertamos el canal alpha.
      if (computedColor.startsWith('hsl(')) {
        return computedColor
      }
      // Si el valor es solo un conjunto de números (ej: "221.97 81.33% 55.88%"),
      // lo envolvemos en la función hsl con la sintaxis moderna.
      return `hsl(${computedColor})`
    }

    return color
  } else {
    let r = 0,
      g = 0,
      b = 0
    if (color.length === 4) {
      r = parseInt(color[1] + color[1], 16)
      g = parseInt(color[2] + color[2], 16)
      b = parseInt(color[3] + color[3], 16)
    } else if (color.length === 7) {
      r = parseInt(color.slice(1, 3), 16)
      g = parseInt(color.slice(3, 5), 16)
      b = parseInt(color.slice(5, 7), 16)
    }
    return `rgb(${r}, ${g}, ${b})`
  }
}

const startColor = ref('')
const endColor = ref('')

const colorMode = useColorMode()

onMounted(() => {
  startColor.value = resolveColor(colorStartProp)
  endColor.value = resolveColor(colorEndProp)
})

watch(colorMode, async () => {
  await nextTick()
  startColor.value = resolveColor(colorStartProp)
  endColor.value = resolveColor(colorEndProp)
})
</script>

<template>
  <div class="relative flex justify-center items-center w-full h-full">
    <svg class="w-full h-full" viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="endColor" />
          <stop offset="100%" :stop-color="startColor" />
        </linearGradient>
      </defs>

      <!-- Arco de fondo -->
      <circle
        cx="100"
        cy="100"
        :r="radius"
        stroke="#e5e7eb"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="arcDasharray"
        :transform="`rotate(${rotation} 100 100)`"
        stroke-linecap="round"
      />

      <!-- Arco de progreso -->
      <circle
        cx="100"
        cy="100"
        :r="radius"
        stroke="url(#progress-gradient)"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="arcDasharray"
        :stroke-dashoffset="arcDashoffset"
        :stroke-linecap="rounded ? 'round' : 'butt'"
        :transform="`rotate(${rotation} 100 100)`"
      />
      <!-- Texto central con dos líneas: principal y porcentaje -->
      <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" class="dark:fill-white">
        <!-- Texto principal -->
        <tspan x="100" dy="-0.3em" class="text-xl font-bold">{{ text }}</tspan>
        <!-- Porcentaje debajo, solo si se activa showPercentage -->
        <tspan x="100" dy="1.2em" v-if="showPercentage" class="text-lg">{{ value }}%</tspan>
      </text>
    </svg>
  </div>
</template>
