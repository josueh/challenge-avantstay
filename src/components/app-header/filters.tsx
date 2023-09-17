'use client'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useQueryStringContext } from '~/contexts'
import * as UI from './filters.styles'
import { useRegionsAPI } from '~/hooks/regions-api'
import { FilterInputArea } from './filter-input-area'
import { InputText, InputSelect, InputDateRange } from '../shared'
import { convertToSQLDate, formatRangePeriod } from '~/lib/date'

const DEFAULT_REGION = 'Any region'

const orderOptions = [
  { value: 'RELEVANCE', label: 'Relevance', default: true },
  { value: 'PRICE_ASC', label: 'Price: lowest first' },
  { value: 'PRICE_DESC', label: 'Price: highest first' },
]

const guestOptions = [
  { value: '1', label: '1 guest' },
  { value: '2', label: '2 guests' },
  { value: '3', label: '3 guests' },
  { value: '4', label: '4 guests' },
  { value: '5', label: '5 guests' },
  { value: '10', label: '10 guests' },
  { value: '15', label: '15 guests' },
  { value: '20', label: '20 guests' },
  { value: '25', label: '25 guests' },
  { value: '30', label: '30 guests' },
]

type BookingPeriod = {
  checkIn: Date | null
  checkOut: Date | null
}

export const Filters = ({ initialRegionName }: { initialRegionName?: string }) => {
  const router = useRouter()
  const qs = useQueryStringContext()
  const { checkIn, checkOut, guests } = qs.data
  const order = qs.data.order ?? orderOptions.find((i) => i.default)?.value

  function setBookingPeriod({ checkIn, checkOut }: BookingPeriod) {
    if (!checkIn === !checkOut) {
      qs.addQueryString({
        checkIn: checkIn ? convertToSQLDate(checkIn) : undefined,
        checkOut: checkOut ? convertToSQLDate(checkOut) : undefined,
      })
    }
  }
  const labelPeriod = useMemo(() => {
    if (checkIn && checkOut) {
      return formatRangePeriod(checkIn, checkOut)
    }
  }, [checkIn, checkOut])

  const labelOrder = orderOptions.find((i) => i.value === order)?.label
  const labelGuests = guestOptions.find((i) => i.value === guests)?.label

  const { loading, error, regions, selectedRegion } = useRegionsAPI({
    regionName: initialRegionName,
  })
  const labelRegion = selectedRegion ? (
    <>
      <b>{selectedRegion?.name},</b> {selectedRegion.stateName}
    </>
  ) : (
    DEFAULT_REGION
  )

  const regionOptions = useMemo(() => {
    if (loading || error) {
      return []
    }
    const sortedRegions = [...regions]
    sortedRegions.sort()
    return [
      { value: '', label: DEFAULT_REGION },
      ...sortedRegions.map((i) => ({ value: i.name, label: i.name })),
    ]
  }, [regions, loading, error])

  function handleSelectRegion(region?: string) {
    const path = region ? `/regions/${region}` : `/homes`
    router.replace(path + qs.toString())
  }

  return (
    <UI.Wrapper>
      <UI.Group>
        <FilterInputArea
          flexGrow={1.5}
          label="Where"
          placeholder={loading ? 'Loading...' : 'Select...'}
          initialText={loading ? initialRegionName : labelRegion}
          initialValue={initialRegionName}
        >
          <InputSelect name="region" data={regionOptions} onChange={handleSelectRegion} />
        </FilterInputArea>
        <FilterInputArea
          flexGrow={1.5}
          label="When"
          placeholder="Select..."
          initialText={labelPeriod}
        >
          <InputDateRange
            name="period"
            startDate={checkIn ? new Date(checkIn) : null}
            endDate={checkOut ? new Date(checkOut) : null}
            onChange={(value) =>
              setBookingPeriod({ checkIn: value.startDate, checkOut: value.endDate })
            }
          />
        </FilterInputArea>
        <FilterInputArea label="Who" placeholder="Select..." initialText={labelGuests}>
          <InputSelect
            name="guests"
            data={guestOptions}
            onChange={(guests) => qs.addQueryString({ guests: guests })}
          />
        </FilterInputArea>
        <FilterInputArea label="Order" placeholder="Select..." initialText={labelOrder}>
          <InputSelect
            name="order"
            data={orderOptions}
            defaultValue={order}
            onChange={(value) => qs.addQueryString({ order: value })}
          />
        </FilterInputArea>
      </UI.Group>
      <UI.Group>
        <FilterInputArea label="Coupon" placeholder="Got a code?">
          <InputText disabled />
        </FilterInputArea>
      </UI.Group>
    </UI.Wrapper>
  )
}
