'use client'
import imgSatellite from '~/assets/satellite.svg'
import * as UI from './homes-not-found.styles'
import { ButtonWide } from '../shared/button'

type Props = {
  region?: string
}

export const HomesNotFound = ({ region }: Props) => {
  return (
    <UI.Wrapper>
      <UI.AnimatedImage src={imgSatellite} alt="Satellite" />
      <p>Oops! We haven&apos;t found anything matching your search.</p>
      <p>Try something else or reset the filters to see all {region} homes.</p>
      <br />
      <ButtonWide>See all {region} homes</ButtonWide>
    </UI.Wrapper>
  )
}
