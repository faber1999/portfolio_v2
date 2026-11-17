export type AppLocale = 'en' | 'es'

export const isAppLocale = (value: unknown): value is AppLocale => value === 'en' || value === 'es'

/**
 * Pure locale resolution: a valid stored value wins, then the first supported
 * browser language (e.g. 'es-CO' -> 'es', 'en-US' -> 'en'), then 'en'.
 */
export function resolveInitialLocale(
  stored: string | null | undefined,
  navigatorLanguages: readonly (string | null | undefined)[],
): AppLocale {
  if (isAppLocale(stored)) return stored
  const match = navigatorLanguages
    .map((lang) => lang?.slice(0, 2).toLowerCase())
    .find((lang): lang is AppLocale => isAppLocale(lang))
  return match ?? 'en'
}
