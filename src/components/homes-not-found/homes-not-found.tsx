'use client'
import imgSatellite from '~/assets/satellite.svg'
import * as UI from './homes-not-found.styles'
import { ButtonWide } from '../shared'

type Props = {
  pageCenter?: boolean
  region?: string
}

export const HomesNotFound = ({ region, pageCenter }: Props) => {
  return (
    <UI.Wrapper className={pageCenter ? 'page-center' : undefined}>
      <UI.AnimatedImage src={imgSatellite} alt="Satellite" />
      <p>Oops! We haven&apos;t found anything matching your search.</p>
      <p>Try something else or reset the filters to see all {region} homes.</p>
      <ButtonWide>See all {region} homes</ButtonWide>
    </UI.Wrapper>
  )
}
