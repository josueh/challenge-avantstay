import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Wrapper = styled.div`
  display: flex;
  gap: 74px;
  align-self: start;
  min-width: 98px;
  ${typography['text-regular']};
  font-size: 12px;
  color: #022b54;
  color: rgba(2, 43, 84, 0.5);
  background-size: 218px 100%;
  &.loading {
    max-width: 98px;
    white-space: nowrap;
    overflow: hidden;
  }
`
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  .skeleton:last-child {
    margin-top: 5px;
  }
`
export const Label = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  font-size: 12px;
  & > span {
    display: inline-block;
    padding: 0 5px;
  }
`
export const Price = styled.div`
  ${typography['text-bold']};
  padding-top: 4px;
  font-size: 20px;
  color: #022b54;
  background-size: 218px 100%;
`
