import { describe, expect, it } from 'vitest'

import { resolveInitialLocale } from '../resolveInitialLocale'

describe('resolveInitialLocale', () => {
  it('uses a valid stored locale over navigator languages', () => {
    expect(resolveInitialLocale('es', ['en-US'])).toBe('es')
    expect(resolveInitialLocale('en', ['es-CO'])).toBe('en')
  })

  it.each([null, undefined, '', 'fr', 'ES', 'es-CO', 'english'])(
    'ignores invalid stored value %j and falls back to navigator languages',
    (stored) => {
      expect(resolveInitialLocale(stored, ['es-CO'])).toBe('es')
    },
  )

  it("maps a regional browser language like 'es-CO' to 'es'", () => {
    expect(resolveInitialLocale(null, ['es-CO'])).toBe('es')
    expect(resolveInitialLocale(null, ['EN-us'])).toBe('en')
  })

  it('picks the first supported navigator language', () => {
    expect(resolveInitialLocale(null, ['fr-FR', 'de', 'es-MX', 'en-US'])).toBe('es')
  })

  it("falls back to 'en' when no navigator language is supported", () => {
    expect(resolveInitialLocale(null, ['fr-FR', 'pt-BR'])).toBe('en')
    expect(resolveInitialLocale(null, [])).toBe('en')
    expect(resolveInitialLocale('xx', [undefined])).toBe('en')
  })
})
