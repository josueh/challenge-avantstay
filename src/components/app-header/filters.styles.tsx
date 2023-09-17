import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 50px;
`
export const Group = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid #e8eff5;
  border-radius: 3px;
  &:last-child {
    flex: 0.4;
    max-width: max(135px, 15vw);
  }
`
