import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { cn, getYearsOfExperience } from '../utils'

describe('getYearsOfExperience', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns 0 at the June 2018 start date', () => {
    vi.setSystemTime(new Date(2018, 5, 1))
    expect(getYearsOfExperience()).toBe(0)
  })

  it('does not count a year until it is complete', () => {
    vi.setSystemTime(new Date(2019, 4, 15)) // May 2019
    expect(getYearsOfExperience()).toBe(0)
  })

  it('counts full years since June 2018', () => {
    vi.setSystemTime(new Date(2019, 5, 2)) // June 2019
    expect(getYearsOfExperience()).toBe(1)

    vi.setSystemTime(new Date(2026, 4, 31)) // May 2026
    expect(getYearsOfExperience()).toBe(7)

    vi.setSystemTime(new Date(2026, 5, 2)) // June 2026
    expect(getYearsOfExperience()).toBe(8)
  })
})

describe('cn', () => {
  it('joins class names and drops falsy values', () => {
    expect(cn('px-2', false, null, undefined, 'py-1', { hidden: false, block: true })).toBe(
      'px-2 py-1 block',
    )
  })

  it('resolves conflicting Tailwind classes, last one wins', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
    expect(cn('text-red-500', ['text-blue-500'])).toBe('text-blue-500')
  })
})
