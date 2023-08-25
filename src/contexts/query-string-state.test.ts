import { act, renderHook } from '~/lib/test-utils'
import { useQueryStringState } from './query-string-state'

describe(useQueryStringState, () => {
  it('should have an empty state when there is no query strings', () => {
    const initialSearchUrl = ''
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchUrl } })
    expect(result.current.queryString.query).toBeNull()
    expect(result.current.queryString.startDate).toBeNull()
    expect(result.current.queryString.endDate).toBeNull()
  })

  it('should be able to load query string `query` when specified', () => {
    const initialSearchUrl = '?query=someterms'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchUrl } })
    expect(result.current.queryString.query).toBe('someterms')
  })

  it('should be able to sync app state when a new `query` is added', async () => {
    const initialSearchUrl = '?'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchUrl } })
    await act(async () => {
      result.current.addQueryString('query', 'sample-message')
    })
    expect(result.current.queryString.query).toBe('sample-message')
  })

  it('should update window.location when a new `query` is added', async () => {
    const initialSearchUrl = '?'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchUrl } })
    await act(async () => {
      result.current.addQueryString('query', 'California')
    })
    expect(window.location.href).toContain('query=California')
  })

  it('should remove query string from window.location after clearing state', async () => {
    const initialSearchUrl = '?query=123'
    const { result } = renderHook(useQueryStringState, { initialProps: { initialSearchUrl } })
    await act(async () => {
      result.current.clearQueryStrings()
    })
    expect(result.current.queryString.query).toBeNull()
    expect(window.location.href).not.toContain('query')
  })
})
