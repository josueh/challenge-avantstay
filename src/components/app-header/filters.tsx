'use client'
import { useQueryStringContext } from '~/contexts'
import * as UI from './filters.styles'

export const Filters = () => {
  const { queryString } = useQueryStringContext()
  return (
    <UI.Wrapper>
      <pre>{JSON.stringify(queryString)}</pre>
    </UI.Wrapper>
  )
}
