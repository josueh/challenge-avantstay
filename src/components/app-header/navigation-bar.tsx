'use client'
import * as UI from './navigation-bar.styles'
import { IconMore } from './navigation-icon-more'

export const NavigationBar = () => {
  return (
    <UI.Wrapper>
      <UI.Link href="/homes" className="active">
        Find Homes
      </UI.Link>
      <UI.Link href="#">Partners</UI.Link>
      <UI.Link href="#">Company Retreats</UI.Link>
      <UI.Link href="#">
        More
        <IconMore />
      </UI.Link>
    </UI.Wrapper>
  )
}
