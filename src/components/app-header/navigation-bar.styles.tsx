import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Wrapper = styled.nav`
  display: flex;
  gap: 30px;
`

export const Link = styled.a`
  ${typography['text-regular']};
  font-size: 14px;
  color: #022b54;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  &::before {
    content: ' ';
    position: absolute;
    left: 50%;
    top: 28px;
    width: 20px;
    height: 2px;
    background-color: transparent;
    transform: translate(-50%, 0) scale(0, 1);
    transition:
      0.1s transform,
      0.1s background-color;
  }
  &:hover {
    color: #53c3d0;
  }
  &:active {
    color: #53c3d0;
    &::before {
      background-color: #53c3d0;
      transform: translate(-50%, 0);
    }
  }
  svg {
    height: 16px;
    margin-left: 5px;
    vertical-align: text-bottom;
    width: 16px;
  }
`
