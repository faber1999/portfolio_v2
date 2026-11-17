// Intrinsic sizes of the project media in /public. Rendering them as width/height attributes lets
// the browser reserve the right box before the file loads (no layout shift in cards or the modal).
// Image sizes are generated from the files themselves by `pnpm gen:media`; don't list them here.
import { generatedMediaDimensions } from '@/data/media-dimensions.generated'

type Size = { width: number; height: number }

// Manual entries for media `image-size` can't read (e.g. videos) or that should render at a size
// other than the file's own. Videos currently borrow their poster image's size, so this is empty.
const overrides: Record<string, Size> = {}

const sizes: Record<string, Size> = { ...generatedMediaDimensions, ...overrides }

export function mediaSize(src?: string): { width?: number; height?: number } {
  return (src && sizes[src]) || {}
}
