'use client'
import { useRouter } from 'next/navigation'
import { useQueryStringContext } from '~/contexts'
import * as UI from './filters.styles'
import { Region } from '~/graphql'
import { useMemo } from 'react'
import { useRegionsAPI } from '~/hooks/regions-api'
import { FilterInput } from './filter-input'

const DEFAULT_OPTION: Region = {
  id: '',
  name: 'Any region',
  stateCode: '',
  stateName: '',
}

export const Filters = ({ initialRegionName }: { initialRegionName?: string }) => {
  const router = useRouter()
  const qs = useQueryStringContext()

  const { loading, error, regions, selectedRegion } = useRegionsAPI({
    regionName: initialRegionName,
  })
  const labelRegion = selectedRegion ? (
    <>
      <b>{selectedRegion?.name},</b> {selectedRegion.stateName}
    </>
  ) : (
    DEFAULT_OPTION.name
  )

  const regionOptions = useMemo((): Region[] => {
    if (loading || error) {
      return []
    }
    const sortedRegions = [...regions]
    sortedRegions.sort()
    return [DEFAULT_OPTION, ...sortedRegions]
  }, [regions, loading, error])

  function handleSelectRegion(region?: string) {
    const path = region ? `/regions/${region}` : `/homes`
    router.replace(path + qs.toString())
  }

  return (
    <UI.Wrapper>
      <UI.Group>
        <FilterInput
          type="select"
          name="region"
          label="Where"
          placeholder={loading ? 'Loading...' : 'Select...'}
          initialValue={initialRegionName}
          initialText={loading ? initialRegionName : labelRegion}
          onChange={handleSelectRegion}
        >
          {loading ? <option>Loading...</option> : null}
          {regionOptions.map((i) => (
            <option
              key={i.id}
              value={i.name}
              selected={i.id === selectedRegion?.id}
              disabled={loading}
            >
              {i.name}
            </option>
          ))}
        </FilterInput>
        <FilterInput label="When" placeholder="Select..." />
        <FilterInput label="Who" placeholder="Select..." />
        <FilterInput type="select" label="Order" placeholder="Select..." />
      </UI.Group>
      <UI.Group>
        <FilterInput label="Coupon" placeholder="Got a code?" />
      </UI.Group>
    </UI.Wrapper>
  )
}
