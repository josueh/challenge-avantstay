'use client'
import * as UI from './price-area.styles'
import type { Home, HomePricing } from '~/graphql'
import Image from 'next/image'
import iconArrowDown from '~/assets/arrow-down.svg'
import iconArrowUp from '~/assets/arrow-up.svg'
import { convertToCurrency } from '~/lib/currency'
import { If } from '../shared'

type Props = {
  loading?: boolean
} & Partial<Pick<Home, 'seasonPricing'>> &
  Partial<Pick<HomePricing, 'numberOfNights' | 'total'>>

export const PriceArea = ({ loading, seasonPricing, numberOfNights, total }: Props) => {
  return (
    <UI.Wrapper className={loading ? 'loading' : undefined}>
      <If test={!loading && !!numberOfNights}>
        <PerNightPrice nights={numberOfNights!} total={total!} />
      </If>
      <If test={!numberOfNights}>
        <SeasonPrice season="budget" {...seasonPricing?.lowSeason} />
        <SeasonPrice season="prime" {...seasonPricing?.highSeason} />
      </If>
    </UI.Wrapper>
  )
}

function PerNightPrice({ nights, total }: { nights: number; total: number }) {
  const totalPrice = convertToCurrency(total)
  const perNightPrice = convertToCurrency(total / nights)
  return (
    <UI.Group>
      <UI.Label className="skeleton short">
        Total <span>•</span> {nights} nights
      </UI.Label>
      <UI.Price className="skeleton large">{totalPrice || '-'}</UI.Price>
      <UI.Label className="skeleton">{perNightPrice} per night</UI.Label>
    </UI.Group>
  )
}

function SeasonPrice(data: { season: 'budget' | 'prime'; minPrice?: number; maxPrice?: number }) {
  const icon = data.season === 'budget' ? iconArrowDown : iconArrowUp
  const label = data.season === 'budget' ? 'Budget Season' : 'Prime Season'
  const minPrice = data?.minPrice ? convertToCurrency(data?.minPrice) : ''
  const maxPrice = data?.maxPrice ? convertToCurrency(data?.maxPrice) : ''
  return (
    <UI.Group>
      <UI.Label className="skeleton short">
        <Image src={icon} width={16} height={16} alt="" />
        {label}
      </UI.Label>
      <UI.Price className="skeleton large">
        {minPrice} - {maxPrice}
      </UI.Price>
      <UI.Label className="skeleton">per night</UI.Label>
    </UI.Group>
  )
}
