import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { useDateFormat } from '../useDateFormat'

const locale = ref('en')

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ locale }),
}))

describe('useDateFormat().formatMonthYear', () => {
  beforeEach(() => {
    locale.value = 'en'
  })

  it('formats year-month in English', () => {
    const { formatMonthYear } = useDateFormat()
    expect(formatMonthYear('2022-10')).toBe('Oct 2022')
    expect(formatMonthYear('2018-06')).toBe('Jun 2018')
  })

  it('formats year-month in Spanish (lowercase month)', () => {
    locale.value = 'es'
    const { formatMonthYear } = useDateFormat()
    expect(formatMonthYear('2022-10')).toBe('oct 2022')
    expect(formatMonthYear('2018-06')).toBe('jun 2018')
  })

  it('is not shifted by the local time zone (January stays January)', () => {
    const { formatMonthYear } = useDateFormat()
    expect(formatMonthYear('2020-01')).toBe('Jan 2020')
  })

  it('reacts to locale changes', () => {
    const { formatMonthYear } = useDateFormat()
    expect(formatMonthYear('2023-03')).toBe('Mar 2023')
    locale.value = 'es'
    expect(formatMonthYear('2023-03')).toBe('mar 2023')
  })
})
