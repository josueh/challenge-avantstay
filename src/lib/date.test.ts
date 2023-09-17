import { formatRangePeriod } from './date'

describe(formatRangePeriod, () => {
  it('returns `MMM DD, YYYY - MMM DD, YYYY` when months and years are distinct', () => {
    const start = '2020-12-23'
    const end = '2021-01-03'
    const output = formatRangePeriod(start, end)
    expect(output).toBe('Dec 23, 2020 - Jan 03, 2021')
  })

  it('returns `MMM DD - DD, YYYY` when the dates share the same month and year', () => {
    const start = '2021-01-12'
    const end = '2021-01-23'
    const output = formatRangePeriod(start, end)
    expect(output).toBe('Jan 12 - 23, 2021')
  })

  it('returns `MMM DD - MMM DD, YYYY` when the dates share only the year', () => {
    const start = '2021-01-29'
    const end = '2021-02-05'
    const output = formatRangePeriod(start, end)
    expect(output).toBe('Jan 29 - Feb 05, 2021')
  })
})
