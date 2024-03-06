import React from 'react'
import { LabelError } from './LabelError'

export function TextForm({
  label,
  name,
  register,
  errors,
  required = false,
  disabled = false,
  placeholder = ' ',
  type = 'text',
}: {
  label: string
  name: string
  register: any
  errors: any
  required?: boolean
  disabled?: boolean
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        style={errors[name] && { border: '1px solid red' }}
        {...register(name)}
        className="input-text"
        disabled={disabled}
        required={required}
      />
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
