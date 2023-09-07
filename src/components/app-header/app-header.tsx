'use client'
import Image from 'next/image'
import * as UI from './app-header.styles'
import logoIcon from '~/assets/avantstay-icon.svg'
import logoName from '~/assets/avantstay-name.svg'
import { NavigationBar } from './navigation-bar'
import { Button } from '../shared/button'

export const AppHeader = () => {
  return (
    <UI.Wrapper>
      <UI.Center>
        <UI.Column>
          <UI.LogoLink href="/" title="AvantStay">
            <Image src={logoIcon} alt="AvantStay" className="logo-icon" />
            <Image src={logoName} alt="AvantStay" className="logo-name" />
          </UI.LogoLink>
        </UI.Column>
        <UI.Column>
          <NavigationBar />
        </UI.Column>
        <UI.Column>
          <Button $variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </UI.Column>
      </UI.Center>
    </UI.Wrapper>
  )
}
