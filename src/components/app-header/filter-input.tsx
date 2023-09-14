'use client'
import * as UI from './filter-input.styles'

type Props = {
  type?: 'input' | 'select'
  label?: string
  name?: string
  placeholder?: string
  initialValue?: string
  initialText?: React.ReactNode | string
  onChange?: (value?: string) => void
  children?: React.ReactNode
}

export function FilterInput({
  type = 'input',
  name,
  label,
  placeholder,
  initialValue,
  initialText,
  onChange,
  children,
}: Props) {
  return (
    <UI.InputArea>
      <label htmlFor={name}>{label}</label>
      <UI.InputField
        as={type}
        name={name}
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e: any) => onChange?.(e.target.value)}
      >
        {children}
      </UI.InputField>
      <div className={'text-value ' + `type-${type}`}>
        {initialText || <span>{placeholder}</span>}
      </div>
    </UI.InputArea>
  )
}
