import React, { FormEvent } from 'react'
import InputMask from 'react-input-mask'
import { LabelError } from './LabelError'

export function TextFormCep({
  register,
  errors,
  name,
  label,
  required = false,
  handler = () => {},
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  handler?: (e: any) => void
}) {
  return (
    <div>
      <div className="label-float">
        <InputMask
          mask={'99999-999'}
          type="text"
          placeholder=" "
          style={errors[name] && { border: '1px solid red' }}
          {...register(name, {
            required: { message: 'Campo obrigatório', value: required },
            onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
              handler(e.target.value),
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
