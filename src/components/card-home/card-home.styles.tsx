import { keyframes, styled } from 'styled-components'
import { typography } from '~/styles'

const animSkeletonLoading = keyframes`
  from { background-position: -500px 0 }
  to { background-position: 500px 0 }
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  &:last-child {
    padding: 20px 20px 20px 30px;
  }
`

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  /* skeleton loading effect */
  &.loading ${Column} {
    gap: 5px;
  }
  &.loading .skeleton,
  .loading .skeleton {
    color: transparent;
    background: linear-gradient(90deg, #f7f7f7, #f0f0f0, #f7f7f7);
    background-size: 500px 100%;
    border-radius: 2px;
    animation: ${animSkeletonLoading} 2s infinite;
    transform-origin: left center;
    &.short {
      transform: scale(0.8, 0.8) translate(0, -5px);
    }
    &.large {
      transform: scale(1.2, 0.95);
    }
    & > * {
      visibility: hidden;
    }
  }
`

export const HomeLocation = styled.div`
  align-self: start;
  min-width: 132px;
  font-size: 12px;
  color: #53c3d0;
`

export const HomeTitle = styled.div`
  align-self: start;
  min-width: 218px;
  padding: 5px 0;
  ${typography['main-title']};
  font-size: 19px;
  color: #022b54;
  background-size: 218px 100%;
`
export const Space = styled.div`
  margin: auto 0;
  background-size: 0;
`
