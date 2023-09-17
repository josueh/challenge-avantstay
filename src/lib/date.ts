import dayjs from 'dayjs'

export function convertToLocalDate(value: Date | number | string) {
  const date = dayjs(value)
  return date.format('DD/MM/YYYY')
}

export function convertToSQLDate(value: Date) {
  const date = dayjs(value)
  return date.format('YYYY-MM-DD')
}

export function formatRangePeriod(start: Date | string, end: Date | string) {
  const dateA = dayjs(start)
  const dateB = dayjs(end)
  const sameMonth = dateA.month() === dateB.month()
  const sameYear = dateA.year() === dateB.year()
  if (sameYear && sameMonth) {
    return dateA.format('MMM DD') + ' - ' + dateB.format('DD, YYYY')
  }
  if (sameYear) {
    return dateA.format('MMM DD') + ' - ' + dateB.format('MMM DD, YYYY')
  }
  return dateA.format('MMM DD, YYYY') + ' - ' + dateB.format('MMM DD, YYYY')
}
