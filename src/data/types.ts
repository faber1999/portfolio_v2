// Shared shapes for the content in src/data/*. Components import these types from here.
import type { Translations } from '@/composables/useTranslate'
import type { YearMonth } from '@/composables/useDateFormat'

export type { Translations, YearMonth }

// ── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  /** i18n key, e.g. 'experience.job-4-position' */
  position: string
  company: string
  start: YearMonth
  /** Omit for a current position. */
  end?: YearMonth
  /** i18n keys, e.g. 'experience.job-4-description-1' */
  descriptions: string[]
  /** Technology names (language-independent); icons are resolved from `techIcons`. */
  stack: string[]
}

// ── Education ───────────────────────────────────────────────────────────────

export interface HigherEducationEntry {
  /** i18n key */
  title: string
  /** i18n keys */
  descriptions: string[]
  date: YearMonth
}

export interface CourseEntry {
  /** Official credential title, kept verbatim */
  title: string
  /** Language of the official title */
  lang: 'en' | 'es'
  /** Title in the other language, shown as a hint when the UI locale differs from `lang` */
  translatedTitle?: string
  date: YearMonth
  platformName: string
  credentialId: string
  certificationUrl: string
}

// ── Projects ────────────────────────────────────────────────────────────────

export interface Lang {
  name: string
  icon?: string
  abbreviation?: string
}

export interface Detail {
  img?: string
  description: Translations
}

export interface PreviewVideo {
  webm?: string
  mp4?: string
}

export type Project = {
  /** URL key for deep links: /projects?project=<slug> */
  slug: string
  name: string
  description: Translations
  demoUrl?: string
  githubUrl?: string
  previewImage?: string
  previewVideo?: PreviewVideo
  techs?: Record<string, Lang[]>
  isPrivate?: boolean
  detail?: Detail[]
}

// ── Skills ──────────────────────────────────────────────────────────────────

export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner'

export interface Skill {
  name: string
  level: SkillLevel
  icon?: string
}
