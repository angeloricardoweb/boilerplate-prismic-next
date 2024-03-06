import React from 'react'
import { LabelError } from './LabelError'

export function TextAreaForm({
  register,
  errors,
  name,
  label,
  required = false,
  disabled = false,
  placeholder = ' ',
  rows = 3,
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  rows?: number
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        rows={rows}
        id={name}
        placeholder={placeholder}
        style={errors[name] && { border: '1px solid red' }}
        {...register(name, {
          required: { message: 'Campo obrigatório', value: required },
        })}
        className="input-text"
        disabled={disabled}
      />
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
