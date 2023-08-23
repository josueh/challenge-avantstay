import Image from 'next/image'
import { keyframes, styled } from 'styled-components'

const animSatellite = keyframes`
  from { transform: rotate( 2deg) }
  to   { transform: rotate(-2deg) }
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AnimatedImage = styled(Image)`
  margin: 20px auto;
  animation: ${animSatellite} 2s infinite alternate-reverse;
  transform-origin: 25% 75%;
`
