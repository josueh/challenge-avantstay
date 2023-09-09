import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
`

export const RegionName = styled.div`
  ${typography['main-title']};
  font-size: 28px;
  color: #53c3d0;
`
