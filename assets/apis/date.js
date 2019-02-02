import { ShowSingleQuery } from './duration'

export const IsCelebrationDay = duration => {
  const totalDays = ShowSingleQuery(duration, 'Ady')
  if (totalDays % 100 === 0) return true // every 100 days (fire on 1 day only)

  const years = ShowSingleQuery(duration, 'Yr')
  const months = ShowSingleQuery(duration, 'Yr')
  const days = ShowSingleQuery(duration, 'Yr')
  if (years !== 0 && months === 0 && days === 0) return true // every year (fire, first day of the year)

  return false
}
