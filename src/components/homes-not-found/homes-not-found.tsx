'use client'
import imgSatellite from '~/assets/satellite.svg'
import * as UI from './homes-not-found.styles'
import { ButtonWide } from '../shared'
import { Animation } from '../shared/animation'

type Props = {
  pageCenter?: boolean
  region?: string
  onClick?: () => void
}

export const HomesNotFound = ({ region, pageCenter, onClick }: Props) => {
  return (
    <UI.Wrapper className={pageCenter ? 'page-center' : undefined}>
      <Animation.FadeIn>
        <UI.AnimatedImage src={imgSatellite} alt="Satellite" />
      </Animation.FadeIn>
      <p>Oops! We haven&apos;t found anything matching your search.</p>
      <p>Try something else or reset the filters to see all {region} homes.</p>
      <ButtonWide onClick={onClick}>See all {region} homes</ButtonWide>
    </UI.Wrapper>
  )
}
