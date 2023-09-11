'use client'
import { useMemo } from 'react'
import * as UI from './card-home.styles'
import { Photos } from './photos'
import type { Home } from '~/graphql'
import { Amenities } from './amenities'
import { PriceArea } from './price-area'

type Props = {
  loading?: boolean
  data?: Home
}

export const CardHome = ({ loading, data }: Props) => {
  const location = data ? formatLocation(data) : ''
  const photos = useMemo(() => {
    return [...(data?.photos || [])]
      .sort((a, b) => (a.listOrder < b.listOrder ? -1 : 1))
      .map((i) => i.url)
  }, [data])

  return (
    <UI.Wrapper className={loading ? 'loading' : undefined}>
      <UI.Column>
        <Photos title={data?.title} urls={photos} />
      </UI.Column>
      <UI.Column>
        <UI.HomeLocation>{location ?? '-'}</UI.HomeLocation>
        <UI.HomeTitle>{data?.title ?? '-'}</UI.HomeTitle>
        <Amenities {...data} />
        <UI.Space />
        <PriceArea loading={loading} {...data} />
      </UI.Column>
    </UI.Wrapper>
  )
}

function formatLocation({ regionName, cityName, stateCode }: Home) {
  const city = `${cityName}, ${stateCode}`
  return regionName === cityName ? city : `${regionName} • ${city}`
}
