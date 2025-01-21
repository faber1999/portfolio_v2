import { onMounted, ref } from 'vue'

export function useDeviceType() {
  const isMobile = ref(false)

  const detectDeviceType = () => {
    const userAgent = navigator.userAgent || navigator.vendor

    // Detecta dispositivos móviles basados en el User-Agent
    isMobile.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    )
  }

  onMounted(() => {
    detectDeviceType()
  })

  return { isMobile }
}
