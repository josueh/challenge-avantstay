import styled, { keyframes } from 'styled-components'
import { typography } from '~/styles'

const DEFAULT_TEXT = 'Loading'

export const LoadingMore = ({ children }: { children?: string }) => {
  return (
    <Wrapper>
      {children ?? DEFAULT_TEXT}
      <span>...</span>
    </Wrapper>
  )
}

const anim3dots = keyframes`
  0%, 10% { width: 0 }
  100% { width: 100% }
`
const Wrapper = styled.div`
  ${typography['text-regular']};
  pointer-events: none;
  user-select: none;
  margin: 60px auto;
  padding: 5px 16px;
  font-size: 16px;
  color: #b3b3b3;
  background-color: #f7f7f7;
  border-radius: 2px;
  span {
    position: relative;
    padding-left: 1px;
    letter-spacing: 0.5px;
    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      background-color: #f7f7f7;
      animation: ${anim3dots} 0.7s infinite alternate-reverse;
    }
  }
`
