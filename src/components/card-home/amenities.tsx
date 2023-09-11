'use client'
import * as UI from './amenities.styles'
import type { Home } from '~/graphql'
import Image from 'next/image'
import iconBedrooms from '~/assets/home-bedrooms.svg'
import iconBathrooms from '~/assets/home-bathrooms.svg'
import iconPool from '~/assets/home-pool.svg'
import iconGuests from '~/assets/home-guests.svg'

type Props = Partial<Pick<Home, 'roomsCount' | 'bathroomsCount' | 'hasPool' | 'maxOccupancy'>>
type AmenityName = 'Bedroom' | 'Bathroom' | 'Pool' | 'Guest'

const AMENITY_ICON: Record<AmenityName, string> = {
  Bedroom: iconBedrooms,
  Bathroom: iconBathrooms,
  Pool: iconPool,
  Guest: iconGuests,
}

export const Amenities = ({ roomsCount, bathroomsCount, hasPool, maxOccupancy }: Props) => {
  const amenities = [
    parserAmenity(`Bedroom`, roomsCount),
    parserAmenity(`Bathroom`, bathroomsCount),
    parserAmenity(`Pool`, hasPool),
    parserAmenity(`Guest`, maxOccupancy),
  ].filter((i) => i.text)

  return (
    <UI.Wrapper>
      {amenities.map(({ icon, text }) => (
        <div key={text}>
          <Image src={icon} width={24} height={24} alt={text} />
          <span>{text}</span>
        </div>
      ))}
    </UI.Wrapper>
  )
}

function parserAmenity(name: AmenityName, value?: number | boolean) {
  const output = { icon: AMENITY_ICON[name], text: '' }
  if (typeof value === 'number' && value) {
    output.text = value.toFixed(1).replace(/[\.,]0$/, '') + ' ' + name + (value > 1 ? 's' : '')
  }
  if (typeof value === 'boolean' && value) {
    output.text = name
  }
  return output
}
