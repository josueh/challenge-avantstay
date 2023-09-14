import { styled } from 'styled-components'
import { typography } from '~/styles'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  max-width: 860px;
  margin: 0 auto;
  padding-top: 155px;
`

export const RegionName = styled.div`
  ${typography['main-title']};
  font-size: 28px;
  color: #53c3d0;
`

export const Cards = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const CardSeparator = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #f4f7fa;
  border: none;
`
export const Footer = styled.footer`
  min-height: 60px;
`
