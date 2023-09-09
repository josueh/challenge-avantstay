'use client'
import * as UI from './main-title.styles'

type Props = {
  loading?: boolean
  total?: number
}

export const MainTitle = ({ loading, total }: Props) => {
  const message = loading ? 'PLEASE WAIT' : 'YOUR STAY IN ONE OF'
  return (
    <UI.Wrapper>
      <UI.Label>{message}</UI.Label>
      <UI.Title>
        <b>{loading ? 'Loading' : total}</b> homes
      </UI.Title>
    </UI.Wrapper>
  )
}
