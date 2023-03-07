import React from 'react'
import { LabelError } from './LabelError'

export function TextForm({
  register,
  errors,
  name,
  label,
  required = false,
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
}) {
  return (
    <div>
      <div className="label-float">
        <input
          type="text"
          placeholder=" "
          style={errors[name] && { border: '1px solid red' }}
          {...register(name, {
            required: { message: 'Campo obrigatório', value: required },
          })}
        />
        <label>{label}</label>
      </div>
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
