import { css, styled } from 'styled-components'
import { typography } from '~/styles'

type variant = 'outline' | 'filled'

export const Button = styled.button<{ $variant?: variant }>`
  ${typography['text-bold']}
  font-size: 14px;
  cursor: pointer;
  padding: 8px 25px;
  color: #022b54;
  background: transparent;
  border: 2px solid currentColor;
  border-radius: 4px;
  transition:
    0.1s border-color,
    0.1s color;
  &:hover {
    color: #53c3d0;
  }
  &:active {
    color: #34aebc;
    transition: none;
  }
  ${(props) =>
    props.$variant === 'outline' &&
    css`
      border-color: transparent;
    `}
`

export const ButtonWide = styled(Button)`
  padding-left: 40px;
  padding-right: 40px;
  color: #53c3d0;
  &:hover {
    color: #1c5d9f;
  }
  &:active {
    color: #022b54;
  }
`
