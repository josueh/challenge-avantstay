import dayjs from 'dayjs'

export function convertToLocalDate(value: Date | number | string) {
  const date = dayjs(value)
  return date.format('DD/MM/YYYY')
}

export function convertToSQLDate(value: Date) {
  const date = dayjs(value)
  return date.format('YYYY-MM-DD')
}
