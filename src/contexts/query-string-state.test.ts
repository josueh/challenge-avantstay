import { act, renderHook } from '~/lib/test-utils'
import { useQueryStringState } from './query-string-state'

describe(useQueryStringState, () => {
  it('should have an empty state when there is no query strings', () => {
    const initialSearchParams = ''
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchParams } })
    expect(result.current.data.query).toBeUndefined()
    expect(result.current.data.startDate).toBeUndefined()
    expect(result.current.data.endDate).toBeUndefined()
  })

  it('should be able to load query string `query` when specified', () => {
    const initialSearchParams = '?query=someterms'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchParams } })
    expect(result.current.data.query).toBe('someterms')
  })

  it('should be able to sync app state when a new `query` is added', async () => {
    const initialSearchParams = '?'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchParams } })
    await act(async () => {
      result.current.addQueryString('query', 'sample-message')
    })
    expect(result.current.data.query).toBe('sample-message')
  })
})
