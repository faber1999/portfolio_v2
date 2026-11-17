import { watch } from 'vue'
import { createI18n, type I18nOptions } from 'vue-i18n'

import en from './locals/en.json'
import es from './locals/es.json'
import { type AppLocale, isAppLocale, resolveInitialLocale } from './resolveInitialLocale'

type Messages = {
  [key: string]: string | Messages
}

const messages: Messages = {
  en,
  es,
}

export const supportedLocales = Object.keys(messages)

export { resolveInitialLocale }

const STORAGE_KEY = 'locale'
const OG_LOCALES: Record<AppLocale, string> = { en: 'en_US', es: 'es_ES' }

function getInitialLocale(): AppLocale {
  let stored: string | null = null
  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch {
    // localStorage unavailable (private mode, blocked storage)
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]
  return resolveInitialLocale(stored, preferred)
}

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  legacy: false,
  messages: messages as I18nOptions['messages'],
})

// Single source of truth for side effects of the active locale (runs at startup too).
watch(
  i18n.global.locale,
  (value, oldValue) => {
    const locale: AppLocale = isAppLocale(value) ? value : 'en'
    document.documentElement.lang = locale
    const alternate: AppLocale = locale === 'en' ? 'es' : 'en'
    document.head
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', OG_LOCALES[locale])
    document.head
      .querySelector('meta[property="og:locale:alternate"]')
      ?.setAttribute('content', OG_LOCALES[alternate])
    // Persist only explicit changes, so first visits keep following the browser language.
    if (oldValue === undefined) return
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore storage errors
    }
  },
  { immediate: true },
)

export default i18n
