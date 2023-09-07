import { styled } from 'styled-components'
import { display } from '~/styles'

export const Wrapper = styled.header`
  isolation: isolate;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 14px 45px;
  box-shadow: rgba(117, 122, 135, 0.1) 0px 4px 60px;
  background: white;
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`

export const Column = styled.div``

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 26px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  .logo-icon {
    display: none;
  }
  ${display.tablet} {
    .logo-name {
      display: none;
    }
    .logo-icon {
      display: revert;
    }
  }
`