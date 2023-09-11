import Image from 'next/image'
import { keyframes, styled } from 'styled-components'
import { typography } from '~/styles'

const animSatellite = keyframes`
  from { transform: rotate( 2deg) }
  to   { transform: rotate(-2deg) }
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${typography['text-regular']}
  p {
    line-height: 1.8;
  }
  button {
    margin-top: 30px;
  }
`

export const AnimatedImage = styled(Image)`
  margin: 30px auto;
  animation: ${animSatellite} 2s infinite alternate-reverse;
  transform-origin: 25% 75%;
`
