import { createI18n, type I18nOptions } from 'vue-i18n'

import en from './locals/en.json'
import es from './locals/es.json'

type Messages = {
  [key: string]: string | Messages
}

const messages: Messages = {
  en,
  es,
}

export const supportedLocales = Object.keys(messages)

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages: messages as I18nOptions['messages'],
})
