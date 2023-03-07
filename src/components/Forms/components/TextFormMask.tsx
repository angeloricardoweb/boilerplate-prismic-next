import React from 'react'
import InputMask from 'react-input-mask'
import { LabelError } from './LabelError'

export function TextFormMask({
  register,
  errors,
  name,
  label,
  required = false,
  mask,
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  mask: string
}) {
  return (
    <div>
      <div className="label-float">
        <InputMask
          mask={mask}
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
