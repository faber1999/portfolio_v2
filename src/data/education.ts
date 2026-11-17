// Education shown on /education: higher education first, then courses and certifications,
// both newest first.
//
// To add a degree: add an entry to `higherEducation`; `title` and `descriptions` are i18n keys
// (texts live in src/langs/locals/en.json and es.json). Dates are 'YYYY-MM'.
// To add a course/certificate: add an entry to `coursesCertifications` with its official title
// verbatim, the title's language in `lang` and, optionally, `translatedTitle` in the other one.
import type { CourseEntry, HigherEducationEntry } from './types'

export const higherEducation: HigherEducationEntry[] = [
  {
    title: 'education.systems-engineer',
    descriptions: ['education.systems-engineer-description'],
    date: '2022-10',
  },
  {
    title: 'education.adsi',
    descriptions: ['education.adsi-description', 'education.adsi-description-2'],
    date: '2019-09',
  },
  {
    title: 'education.technical-bachelor',
    descriptions: ['education.technical-bachelor-description'],
    date: '2015-11',
  },
]

export const coursesCertifications: CourseEntry[] = [
  {
    title: 'Angular Pro: Lleva tus bases al siguiente nivel',
    lang: 'es',
    translatedTitle: 'Angular Pro: Take your foundations to the next level',
    date: '2026-03',
    platformName: 'Udemy',
    credentialId: 'UC-20d8cb67-4a6c-4d72-9a69-7cffabbe1860',
    certificationUrl: 'https://www.udemy.com/certificate/UC-20d8cb67-4a6c-4d72-9a69-7cffabbe1860/',
  },
  {
    title: 'English EF SET Certificate - 51/100 - B2 Upper Intermediate',
    lang: 'en',
    translatedTitle: 'Certificado de inglés EF SET - 51/100 - B2 intermedio alto',
    date: '2025-07',
    platformName: 'EF SET',
    credentialId: 'frXDBk',
    certificationUrl: 'https://cert.efset.org/frXDBk',
  },
  {
    title: 'Certified Mid-Level Vue.js Developer',
    lang: 'en',
    date: '2025-04',
    platformName: 'certificates.dev',
    credentialId: '9eca4a05-ecb4-42ca-9bb0-74d01de66fc9',
    certificationUrl:
      'https://certificates.dev/vuejs/certificates/9eca4a05-ecb4-42ca-9bb0-74d01de66fc9',
  },
  {
    title: 'TypeScript: Tu completa guía y manual de mano',
    lang: 'es',
    translatedTitle: 'TypeScript: Your complete guide and handbook',
    date: '2024-05',
    platformName: 'Udemy',
    credentialId: 'UC-4f24131e-0412-49fd-892f-18721982df70',
    certificationUrl: 'https://www.udemy.com/certificate/UC-4f24131e-0412-49fd-892f-18721982df70/',
  },
  {
    title: 'OpenAI: Ejercicios prácticos y asistentes con React + NestJS',
    lang: 'es',
    translatedTitle: 'OpenAI: Hands-on exercises and assistants with React + NestJS',
    date: '2024-05',
    platformName: 'Udemy',
    credentialId: 'UC-8313f32c-06d5-4c3c-9bb6-03fbef462141',
    certificationUrl: 'https://www.udemy.com/certificate/UC-8313f32c-06d5-4c3c-9bb6-03fbef462141/',
  },
  {
    title: 'Zustand - Gestor de estado para React',
    lang: 'es',
    translatedTitle: 'Zustand - State management for React',
    date: '2024-04',
    platformName: 'Udemy',
    credentialId: 'UC-b7ac48ed-ba23-47d0-bc9a-ad6f88af4177',
    certificationUrl: 'https://www.udemy.com/certificate/UC-b7ac48ed-ba23-47d0-bc9a-ad6f88af4177/',
  },
  {
    title: 'Angular - De cero a experto',
    lang: 'es',
    translatedTitle: 'Angular - From zero to expert',
    date: '2021-12',
    platformName: 'Udemy',
    credentialId: 'UC-71b05ea6-0fb5-486a-819a-8503b1a75326',
    certificationUrl: 'https://www.udemy.com/certificate/UC-71b05ea6-0fb5-486a-819a-8503b1a75326/',
  },
  {
    title: 'DevOps Essentials Professional Certificate (DEPC) - (Spanish)',
    lang: 'en',
    translatedTitle: 'Certificado profesional en fundamentos de DevOps (en español)',
    date: '2021-04',
    platformName: 'CertiProf',
    credentialId: 'FLTLLPSLJP-DSFJDKJL-WHBZWTZHHK',
    certificationUrl: 'https://drive.google.com/file/d/1_lwH0M6hKAAnOzy4b9_QQvUP5tWaHWhM/view',
  },
  {
    title: 'Scrum Master Professional Certificate (SMPC)',
    lang: 'en',
    translatedTitle: 'Certificado profesional de Scrum Master',
    date: '2020-07',
    platformName: 'CertiProf',
    credentialId: '41578698457861',
    certificationUrl: 'https://drive.google.com/file/d/15g-INIwUDEs2siSQIM8y8G1u35K8Z2EZ/view',
  },
]
