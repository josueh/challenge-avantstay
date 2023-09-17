'use client'
import { keyframes, styled } from 'styled-components'

export const Animation = {
  FadeIn: ({ children }: { children: React.ReactNode }) => {
    return <WrapperFadeIn>{children}</WrapperFadeIn>
  },
}

const animFadeIn = keyframes`
  from { opacity: 0.5; transform: translate(0, 10px) }
  to { opacity: 1.0; transform: translate(0, 0) }
`

const WrapperFadeIn = styled.div`
  opacity: 1;
  animation: ${animFadeIn} 0.2s ease-in;
  animation-iteration-count: 1;
`
