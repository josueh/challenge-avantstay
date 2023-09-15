import { TextInput } from '@mantine/core'
import { styled } from 'styled-components'
import { typography } from '~/styles'

type Props = {
  disabled?: boolean
  defaultValue?: string
  onChange?: (value: string) => void
}

export const InputText = ({ disabled, defaultValue, onChange }: Props) => {
  return (
    <Wrapper className={disabled ? 'disabled' : undefined}>
      <TextInput
        size="xs"
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${typography['text-regular']};
  font-size: 14px;
  &.disabled {
    cursor: not-allowed;
    input {
      background-color: white;
    }
  }
  .mantine-Select-item {
    color: #022b54aa;
    &[data-selected] {
      color: #fff;
      background-color: #53c3d0;
    }
  }
`
