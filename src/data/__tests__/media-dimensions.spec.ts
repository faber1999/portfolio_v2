import { describe, expect, it } from 'vitest'
import { generatedMediaDimensions } from '../media-dimensions.generated'
import { projects } from '../projects'

const IMAGE_EXT = /\.(webp|avif|png|jpe?g)$/i

const referencedImages = [
  ...new Set(
    projects.flatMap((project) => [
      project.previewImage,
      ...(project.detail ?? []).map((item) => item.img),
    ]),
  ),
].filter((src): src is string => !!src && IMAGE_EXT.test(src))

describe('media dimensions', () => {
  it('finds project images to check', () => {
    expect(referencedImages.length).toBeGreaterThan(0)
  })

  it.each(referencedImages)('has generated dimensions for %s', (src) => {
    const size = generatedMediaDimensions[src]
    expect(size, `run \`pnpm gen:media\`; missing ${src}`).toBeDefined()
    expect(size.width).toBeGreaterThan(0)
    expect(size.height).toBeGreaterThan(0)
  })

  it('has its keys sorted (deterministic output)', () => {
    const keys = Object.keys(generatedMediaDimensions)
    expect(keys).toEqual([...keys].sort())
  })
})
