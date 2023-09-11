'use client'
import * as UI from './price-area.styles'
import type { Home } from '~/graphql'
import Image from 'next/image'
import iconArrowDown from '~/assets/arrow-down.svg'
import iconArrowUp from '~/assets/arrow-up.svg'
import { convertToCurrency } from '~/lib/currency'

type Props = { loading?: boolean } & Partial<Pick<Home, 'seasonPricing'>>

export const PriceArea = ({ loading, seasonPricing }: Props) => {
  return (
    <UI.Wrapper className={loading ? 'loading' : undefined}>
      <SeasonPrice season="budget" {...seasonPricing?.lowSeason} />
      <SeasonPrice season="prime" {...seasonPricing?.highSeason} />
    </UI.Wrapper>
  )
}

function SeasonPrice(data: { season: 'budget' | 'prime'; minPrice?: number; maxPrice?: number }) {
  const icon = data.season === 'budget' ? iconArrowDown : iconArrowUp
  const label = data.season === 'budget' ? 'Budget Season' : 'Prime Season'
  const minPrice = data?.minPrice ? convertToCurrency(data?.minPrice) : ''
  const maxPrice = data?.maxPrice ? convertToCurrency(data?.maxPrice) : ''
  return (
    <UI.Group>
      <UI.Label>
        <Image src={icon} width={16} height={16} alt="" />
        {label}
      </UI.Label>
      <UI.Price>
        {minPrice} - {maxPrice}
      </UI.Price>
      <UI.Label>per night</UI.Label>
    </UI.Group>
  )
}
