import { DatePickerInput } from '@mantine/dates'
import { styled } from 'styled-components'
import { typography } from '~/styles'

type Props = {
  name?: string
  startDate?: Date | null
  endDate?: Date | null
  onChange?: ({ startDate, endDate }: { startDate: Date | null; endDate: Date | null }) => void
}

export const InputDateRange = ({ name, startDate, endDate, onChange }: Props) => {
  return (
    <Wrapper className="input-date-range">
      <DatePickerInput
        type="range"
        size="xs"
        mx="auto"
        maw={400}
        firstDayOfWeek={0}
        name={name}
        defaultValue={[startDate ?? null, endDate ?? null]}
        onChange={([startDate, endDate]) => onChange?.({ startDate, endDate })}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${typography['text-regular']};
  font-size: 14px;
  button.mantine-Day-day {
    font-size: 13px;
    ${typography['text-regular']};
  }
  button.mantine-DatePickerInput-calendarHeaderLevel {
    color: #022b54aa;
  }
  .mantine-DatePickerInput-input {
    background-color: white;
  }
  .mantine-DatePickerInput-day {
    color: #022b54;
    &[data-selected] {
      color: #fff;
      background-color: #53c3d0;
    }
  }
  button[data-in-range] {
    background-color: #53c3d033;
  }
  button[data-weekend] {
    color: #509aa2;
  }
  button[data-outside] {
    color: #022b5455;
  }
`
