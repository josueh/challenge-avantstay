'use client'
import { useMemo } from 'react'
import * as UI from './card-home.styles'
import { Photos } from './photos'
import type { Home, HomePricing } from '~/graphql'
import { Amenities } from './amenities'
import { PriceArea } from './price-area'

type Props = {
  loading?: boolean
  data?: Home
  loadingPrices?: boolean
  pricing?: HomePricing
}

export const CardHome = ({ loading, data, loadingPrices, pricing }: Props) => {
  const location = data ? formatLocation(data) : ''
  const photos = useMemo(() => {
    return [...(data?.photos || [])]
      .sort((a, b) => (a.listOrder < b.listOrder ? -1 : 1))
      .map((i) => i.url)
  }, [data])

  return (
    <UI.Wrapper className={loading ? 'loading' : undefined}>
      <UI.Column className="skeleton">
        <Photos title={data?.title} urls={photos} />
      </UI.Column>
      <UI.Column>
        <UI.HomeLocation className="skeleton short">{location ?? '-'}</UI.HomeLocation>
        <UI.HomeTitle className="skeleton">{data?.title ?? '-'}</UI.HomeTitle>
        <Amenities {...data} />
        <UI.Space />
        <PriceArea loading={loading || loadingPrices} {...data} {...pricing} />
      </UI.Column>
    </UI.Wrapper>
  )
}

function formatLocation({ regionName, cityName, stateCode }: Home) {
  const city = `${cityName}, ${stateCode}`
  return regionName === cityName ? city : `${regionName} • ${city}`
}
