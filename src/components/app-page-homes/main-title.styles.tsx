import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Wrapper = styled.header`
  ${typography['text-regular']};
  width: 100%;
  padding: 14px 0 25px 0;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
  color: #53c3d0;
  &:after {
    content: ' ';
    width: 68px;
    height: 1px;
    margin-left: 7px;
    background-color: currentColor;
  }
`
export const Title = styled.div`
  font-size: 28px;
  color: #022b54;
  b {
    display: inline-block;
    padding-right: 6px;
  }
`
