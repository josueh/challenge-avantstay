import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Nav = styled.nav`
  position: absolute;
  inset: 0;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  transition:
    0.2s transform,
    0.2s opacity;
  transform: scale(1.3);
  opacity: 0;
`
export const Total = styled.div`
  ${typography['text-regular']};
  pointer-events: none;
  user-select: none;
  position: absolute;
  left: 10px;
  bottom: 10px;
  padding: 2px 10px;
  line-height: 1.5;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  opacity: 0;
  border-radius: 3px;
  transition:
    0.2s transform,
    0.2s opacity;
`
export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  line-height: 0;
  border-radius: 2px;
  &:hover {
    ${Nav}, ${Total} {
      transform: scale(1);
      opacity: 0.9;
    }
  }
`
export const NavButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 32px;
  height: 32px;
  opacity: 0.7;
  box-shadow: 0 0 2px rgba(100, 100, 100, 0.7);
  background: #fff url(/icons/arrow-bottom.svg) no-repeat;
  background-position: 50% 60%;
  background-size: 22px;
  border: none;
  border-radius: 50px;
  &.left {
    transform: rotate(90deg);
  }
  &.right {
    transform: rotate(-90deg);
  }
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`
