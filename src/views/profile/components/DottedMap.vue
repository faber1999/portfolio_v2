<script lang="ts" setup>
import DottedMap from 'dotted-map'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

interface PinData {
  lat: number
  lng: number
  tooltipKey: string
}

const { t, locale } = useI18n()

// Array de pins usando claves de traducción
const pinsArray: PinData[] = [
  {
    lat: 4.5341,
    lng: -75.6751,
    tooltipKey: 'profile.current-location',
  },
]

// Ref para almacenar el índice del pin actualmente activo
const currentPinIndex = ref<number | null>(null)

onMounted(() => {
  const map = new DottedMap({
    height: 60,
    grid: 'diagonal',
    countries: ['COL'],
  })

  // Agrega cada pin desde el array
  pinsArray.forEach((pinData) => {
    map.addPin({
      lat: pinData.lat,
      lng: pinData.lng,
      svgOptions: { color: 'hsl(var(--tertiary))', radius: 0.75 },
    })
  })

  const svgMap = map.getSVG({
    radius: 0.22,
    color: 'currentColor',
    shape: 'circle',
  })

  // Inserta el SVG en el contenedor
  const mapElement = document.querySelector<HTMLDivElement>('#mapContainer')!

  if (mapElement) {
    mapElement.innerHTML = svgMap
  }

  // Obtiene todos los elementos de pin (identificados por su atributo fill)
  const pinsElements = mapElement.querySelectorAll<SVGElement>(`circle[r="0.75"]`)
  const svgns = 'http://www.w3.org/2000/svg'

  // Función para agregar efecto ripple a un pin (sin modificar el área sensible)
  const addRipple = (pin: SVGElement) => {
    const ripple = document.createElementNS(svgns, 'circle')
    const cx = pin.getAttribute('cx') || '0'
    const cy = pin.getAttribute('cy') || '0'
    const r = pin.getAttribute('r') || '0.5'
    ripple.setAttribute('cx', cx)
    ripple.setAttribute('cy', cy)
    ripple.setAttribute('r', r)
    ripple.setAttribute('fill', 'none')
    ripple.setAttribute('stroke', 'hsl(var(--tertiary))')
    ripple.setAttribute('stroke-width', '0.4')
    // Animación para expandir el radio
    const animateR = document.createElementNS(svgns, 'animate')
    animateR.setAttribute('attributeName', 'r')
    animateR.setAttribute('from', r)
    animateR.setAttribute('to', '3')
    animateR.setAttribute('dur', '1.25s')
    animateR.setAttribute('repeatCount', 'indefinite')
    ripple.appendChild(animateR)
    // Animación para disminuir la opacidad
    const animateOpacity = document.createElementNS(svgns, 'animate')
    animateOpacity.setAttribute('attributeName', 'stroke-opacity')
    animateOpacity.setAttribute('from', '1')
    animateOpacity.setAttribute('to', '0')
    animateOpacity.setAttribute('dur', '1.25s')
    animateOpacity.setAttribute('repeatCount', 'indefinite')
    ripple.appendChild(animateOpacity)
    // Inserta el ripple detrás del pin
    pin.parentNode?.insertBefore(ripple, pin)
  }

  // Función que asigna el evento de click (para mostrar tooltip) a un elemento
  const assignClickEvent = (element: SVGElement, index: number, pin: SVGElement) => {
    element.style.cursor = 'pointer'
    element.addEventListener('click', (e) => {
      e.stopPropagation()
      currentPinIndex.value = index

      if (document.querySelector<HTMLDivElement>('#tooltip')) {
        return
      }

      const tooltip = document.createElement('div')
      tooltip.id = 'tooltip'
      tooltip.className =
        'block text-sm absolute bg-white dark:bg-black text-primary px-2 py-1 shadow-md rounded-md z-20 text-nowrap md:text-base'
      tooltip.style.pointerEvents = 'auto'

      document.body.appendChild(tooltip)

      tooltip.innerHTML = t(pinsArray[index].tooltipKey)

      // Posiciona el tooltip relativo a la pantalla

      const pinRect = pin.getBoundingClientRect()

      tooltip.style.left = `${pinRect.left - 40}px`
      tooltip.style.top = `${pinRect.top - 35}px`
    })
  }

  // Asocia eventos a cada pin y agrega el área sensible invisible
  pinsElements.forEach((pin, index) => {
    // Aplica el efecto ripple al pin visible
    addRipple(pin)
    // Crea un "hit area" invisible con mayor radio

    const invisibleHit = document.createElementNS(svgns, 'circle')
    const cx = pin.getAttribute('cx') || '0'
    const cy = pin.getAttribute('cy') || '0'
    const pinRadius = parseFloat(pin.getAttribute('r') || '0.5')
    const hitRadius = (pinRadius * 3).toString() // factor 3 para ampliar la zona
    invisibleHit.setAttribute('cx', cx)
    invisibleHit.setAttribute('cy', cy)
    invisibleHit.setAttribute('r', hitRadius)
    invisibleHit.setAttribute('class', 'text-secondary')
    // Se usa fill con opacidad 0 para que sea invisible pero capture eventos
    invisibleHit.setAttribute('fill', '#ffffff')
    invisibleHit.setAttribute('fill-opacity', '0')
    invisibleHit.style.cursor = 'pointer'
    // Agrega el evento de click al área invisible
    assignClickEvent(invisibleHit, index, pin)
    // Inserta el área invisible encima del pin (para que capture el click)
    pin.parentNode?.insertBefore(invisibleHit, pin.nextSibling)
  })

  // Listener global para ocultar el tooltip si se hace click fuera del hit area y del tooltip
  const handleDocumentClick = (e: MouseEvent) => {
    const isClickOnPin = Array.from(pinsElements).some((pin) => pin.contains(e.target as Node))
    // También se comprueba si se hizo click en algún elemento de hit area
    const hitAreas = mapElement.querySelectorAll<SVGElement>('circle[fill-opacity="0"]')
    const isClickOnHit = Array.from(hitAreas).some((hit) => hit.contains(e.target as Node))

    const tooltip = document.querySelector<HTMLDivElement>('#tooltip')

    if (tooltip) {
      if (!isClickOnPin && !isClickOnHit && !tooltip.contains(e.target as Node)) {
        if (tooltip) {
          tooltip.remove()
        }

        currentPinIndex.value = null
      }
    }
  }
  document.addEventListener('click', handleDocumentClick)

  onUnmounted(() => {
    document.removeEventListener('click', handleDocumentClick)
  })
})

// Watcher para actualizar el contenido del tooltip al cambiar el idioma
watch(locale, () => {
  const tooltip = document.querySelector<HTMLDivElement>('#tooltip')
  if (tooltip && tooltip.style.display === 'block' && currentPinIndex.value !== null) {
    tooltip.innerHTML = t(pinsArray[currentPinIndex.value].tooltipKey)
  }
})
</script>

<template>
  <!-- Contenedor del SVG (posicionado relativo para el tooltip) -->
  <div id="mapContainer" class="relative flex justify-center text-primary w-full h-full" />
</template>
