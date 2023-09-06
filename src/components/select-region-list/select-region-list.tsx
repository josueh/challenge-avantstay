'use client'
import { useMemo } from 'react'
import { graphql } from '~/hooks/graphql'

type Region = {
  id: string
  name: string
  stateCode: string
  stateName: string
}

const DEFAULT_OPTION = 'Any region'

export const SelectRegionList = () => {
  const { loading, error, data } = graphql.useQuery('GET_ALL_REGIONS')

  const regionOptions = useMemo(() => {
    const sortedRegions = data?.regions?.map((region: Region) => region.name) ?? []
    sortedRegions.sort()
    return [DEFAULT_OPTION, ...sortedRegions]
  }, [data])

  return (
    <div className="select-region-list">
      <select name="region">
        {loading ? <option key="loading">Loading...</option> : null}
        {error ? <option key="error">Oops...</option> : null}
        {regionOptions.map((regionName) => (
          <option key={regionName} value={regionName}>
            {regionName}
          </option>
        ))}
      </select>
    </div>
  )
}
