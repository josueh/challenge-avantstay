import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-self: start;
  min-width: 241px;
  min-height: 17px;
  ${typography['text-regular']};
  font-size: 12px;
  color: #022b54;
  color: rgba(2, 43, 84, 0.5);
  background-size: 218px 100%;
  div {
    display: flex;
    align-items: center;
    gap: 2px;
    img {
      opacity: 0.3;
    }
  }
`
