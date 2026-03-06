import { useI18n } from 'vue-i18n'

export type Translations = { en: string; es: string }

export function useTranslate() {
  const { locale } = useI18n()
  return (t: Translations): string => {
    const value = t[locale.value as keyof Translations]
    console.log('value', value)
    return value ?? t.en
  }
}
