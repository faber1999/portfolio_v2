import { useI18n } from 'vue-i18n'

/** Year-month in ISO format, e.g. "2022-03". Also valid as a `<time datetime>` value. */
export type YearMonth = `${number}-${string}`

function toUtcDate(yearMonth: YearMonth): Date {
  const [year, month] = yearMonth.split('-').map(Number)
  return new Date(Date.UTC(year, (month || 1) - 1, 1))
}

/**
 * Locale-aware date helpers backed by Intl.DateTimeFormat.
 * - formatMonthYear('2022-10') -> "Oct 2022" (en) / "oct 2022" (es, lowercase per Spanish convention)
 *
 * Ranges are rendered in templates as two `<time>` elements joined by an en dash ("–"),
 * with the `dates.present` label when there is no end date.
 */
export function useDateFormat() {
  const { locale } = useI18n()

  function formatMonthYear(yearMonth: YearMonth): string {
    return new Intl.DateTimeFormat(locale.value, {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(toUtcDate(yearMonth))
  }

  return { formatMonthYear }
}
