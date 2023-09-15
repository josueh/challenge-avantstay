'use client'
import * as UI from './filter-input-area.styles'

type Props = {
  label?: string
  placeholder?: string
  initialValue?: string
  initialText?: React.ReactNode | string
  flexGrow?: number
  children?: React.ReactNode
}

export function FilterInputArea({ label, placeholder, initialText, flexGrow, children }: Props) {
  return (
    <UI.InputArea style={{ flexGrow }}>
      <label>{label}</label>
      {children}
      <div className="text-value">{initialText || <span>{placeholder}</span>}</div>
    </UI.InputArea>
  )
}
