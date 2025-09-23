import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ObjectValues<T> = T[keyof T]

export const getYearsOfExperience = () => {
  const startDate = new Date(2018, 5) // June 2018 (month is 0-indexed)
  const currentDate = new Date()
  const diffInMs = currentDate.getTime() - startDate.getTime()
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffInYears)
}
