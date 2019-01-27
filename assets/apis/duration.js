import moment from 'moment'
moment.locale('th')

const anniversary = moment({
  year: 2018,
  month: 0,
  date: 4,
  hour: 23,
  minute: 52,
  second: 7,
  millisecond: 0
})

export const FindDuration = now => {
  return moment.duration(now.diff(anniversary))
}

export const ShowDuration = (duration, queries) => {
  return queries.reduce((p, query) => {
    const d = ShowSingleQuery(duration, query)
    if (d) {
      p.push(d)
    }
    return p
  }, [])
}

export const ShowSingleQuery = (duration, query) => {
  switch (query) {
    case 'Yr':
      return {
        key: 'Years',
        value: duration
          .years()
          .toString()
          .padStart(2, '0')
      }
    case 'Mt':
      return {
        key: 'Months',
        value: duration
          .months()
          .toString()
          .padStart(2, '0')
      }
    case 'Dy':
      return {
        key: 'Days',
        value: duration
          .days()
          .toString()
          .padStart(2, '0')
      }
    case 'Hr':
      return {
        key: 'Hours',
        value: duration
          .hours()
          .toString()
          .padStart(2, '0')
      }
    case 'Mi':
      return {
        key: 'Minutes',
        value: duration
          .minutes()
          .toString()
          .padStart(2, '0')
      }
    case 'Sc':
      return {
        key: 'Seconds',
        value: duration
          .seconds()
          .toString()
          .padStart(2, '0')
      }
    case 'Ms':
      return {
        key: 'Milliseconds',
        value: duration
          .milliseconds()
          .toString()
          .padStart(2, '0')
      }
    case 'Ayr':
      return {
        key: 'Years',
        value: Math.floor(duration.asYears())
      }
    case 'Amt':
      return {
        key: 'Months',
        value: Math.floor(duration.asMonths())
      }
    case 'Ady':
      return {
        key: 'Days',
        value: Math.floor(duration.asDays())
      }
    case 'Ahr':
      return {
        key: 'Hours',
        value: Math.floor(duration.asHours())
      }
    case 'Ami':
      return {
        key: 'Minutes',
        value: Math.floor(duration.asMinutes())
      }
    case 'Asc':
      return {
        key: 'Seconds',
        value: Math.floor(duration.asSeconds())
      }
    case 'Ams':
      return {
        key: 'Milliseconds',
        value: Math.floor(duration.asMilliseconds())
      }
    default:
      return undefined
  }
}
