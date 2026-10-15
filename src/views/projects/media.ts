// Intrinsic sizes of the project media in /public. Rendering them as width/height attributes lets
// the browser reserve the right box before the file loads (no layout shift in cards or the modal).
const sizes: Record<string, { width: number; height: number }> = {
  '/images/projects/fw-webb/home.webp': { width: 1440, height: 1000 },
  '/images/projects/fw-webb/home-mobile.webp': { width: 390, height: 844 },
  '/images/projects/dsd/image-1.webp': { width: 1200, height: 1200 },
  '/images/projects/dsd/image-2.webp': { width: 1920, height: 1264 },
  '/images/projects/dsd/image-3.webp': { width: 1920, height: 1178 },
  '/images/projects/dsd/image-4.webp': { width: 1920, height: 1536 },
  '/images/projects/axon/demo-poster.webp': { width: 800, height: 450 },
  '/images/projects/axon/image-1.webp': { width: 1200, height: 989 },
  '/images/projects/axon/image-2.webp': { width: 1878, height: 967 },
  '/images/projects/axon/image-3.webp': { width: 1878, height: 967 },
}

export function mediaSize(src?: string): { width?: number; height?: number } {
  return (src && sizes[src]) || {}
}
