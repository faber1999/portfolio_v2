import { useMediaQuery } from '@vueuse/core'

export function useDeviceType() {
  // Define el breakpoint a 768px (puedes ajustar este valor)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return { isMobile }
}
