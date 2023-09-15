import { act, renderHook } from '~/lib/test-utils'
import { useQueryStringState } from './query-string-state'

describe(useQueryStringState, () => {
  it('should have an empty state when there is no query strings', () => {
    const initialSearchParams = ''
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchParams } })
    expect(result.current.data.checkIn).toBeUndefined()
    expect(result.current.data.checkOut).toBeUndefined()
    expect(result.current.data.guests).toBeUndefined()
    expect(result.current.data.order).toBeUndefined()
  })

  it('should be able to define query string `guests` when specified', () => {
    const initialSearchParams = '?guests=3'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchParams } })
    expect(result.current.data.guests).toBe('3')
  })

  it('should be able to sync app state when a new `query string` is added', async () => {
    const initialSearchParams = '?'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchParams } })
    await act(async () => {
      result.current.addQueryString({ order: 'highest first' })
    })
    expect(result.current.data.order).toBe('highest first')
  })
})
