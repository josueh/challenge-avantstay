import { useCallback, useMemo, useState } from 'react'
import { graphql } from './graphql'
import type { Home } from '~/graphql'
import { useRegionsAPI } from './regions-api'

const PAGE_SIZE = 10
const PLACEHOLDERS_EMPTY_HOMES = [1, 2, 3].map((i) => ({ id: i }))

type Props = {
  regionName?: string
}

export const useHomesAPI = ({ regionName }: Props) => {
  const queryRegions = useRegionsAPI({ regionName })
  const region = queryRegions.selectedRegion

  const [page, setPage] = useState(1)
  const { loading, data, fetchMore } = graphql.useQuery('GET_HOMES', {
    variables: { region: region?.id ?? '', page: 1, pageSize: PAGE_SIZE },
  })
  const error = regionName && !region && !loading ? 'Something went wrong' : null

  const { total, homes } = useMemo(() => {
    const total: number = data?.homes.count ?? 0
    const homes: Home[] = data?.homes.results ?? PLACEHOLDERS_EMPTY_HOMES
    return { total, homes }
  }, [data])

  const loadMore = useCallback(() => {
    fetchMore({
      variables: { page: page + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev
        }
        setPage((page) => page + 1)
        return {
          homes: {
            count: prev.homes?.count ?? 0,
            results: [...(prev.homes?.results ?? []), ...(fetchMoreResult.homes?.results ?? [])],
          },
        }
      },
    })
  }, [page, fetchMore])

  return { loading, error, total, homes, loadMore }
}
