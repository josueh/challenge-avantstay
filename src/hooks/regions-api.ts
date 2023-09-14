import { Region } from '~/graphql'
import { graphql } from './graphql'

type Props = {
  regionName?: string
}

export const useRegionsAPI = ({ regionName }: Props) => {
  const { loading, error, data } = graphql.useQuery('GET_ALL_REGIONS')
  const regions: Region[] = data?.regions ?? []
  const selectedRegion = regions.find(
    (i: any) => i.name.toUpperCase() === regionName?.toUpperCase()
  )
  return { loading, error, data, regions, selectedRegion }
}
