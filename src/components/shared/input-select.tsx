import { Select } from '@mantine/core'
import { styled } from 'styled-components'
import { typography } from '~/styles'

type Props = {
  name?: string
  defaultValue?: string
  data: Array<{ value: string; label: string }>
  onChange?: (value: string) => void
}

export const InputSelect = ({ name, defaultValue, data, onChange }: Props) => {
  return (
    <Wrapper>
      <Select
        size="xs"
        name={name}
        defaultValue={defaultValue}
        data={data}
        maxDropdownHeight={700}
        onChange={onChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${typography['text-regular']}
  font-size: 14px;
  .mantine-Select-item {
    color: #022b54aa;
    &[data-selected] {
      color: #fff;
      background-color: #53c3d0;
    }
  }
  .mantine-Select-rightSection {
    svg {
      display: none;
    }
    background: no-repeat center 70%;
    background-image: url(/icons/arrow-bottom.svg);
    background-size: 16px;
    opacity: 0.3;
  }
`
