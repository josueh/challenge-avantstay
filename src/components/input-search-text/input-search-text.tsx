import { useQueryStringContext } from '~/contexts'

/**
 * A temporary component just to help visually test `useQueryStringContext`
 */
export const InputSearchText = () => {
  const { queryString, addQueryString } = useQueryStringContext()

  return (
    <>
      <pre>{JSON.stringify(queryString)}</pre>
      <br />
      <input
        name="search-text"
        placeholder="Type query here..."
        value={queryString.query || ''}
        onChange={(e) => addQueryString('query', e.target.value)}
      />
    </>
  )
}
