import { TextInput } from '@mantine/core'
import { styled } from 'styled-components'
import { typography } from '~/styles'

type Props = {
  upperCase?: boolean
  defaultValue?: string
  onChange?: (value: string) => void
}

export const InputText = ({ upperCase, defaultValue, onChange }: Props) => {
  return (
    <Wrapper className={upperCase ? 'upper-case' : undefined}>
      <TextInput
        size="xs"
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${typography['text-regular']};
  font-size: 14px;
  &.upper-case input {
    text-transform: uppercase;
  }
  .mantine-Select-item {
    color: #022b54aa;
    &[data-selected] {
      color: #fff;
      background-color: #53c3d0;
    }
  }
`
