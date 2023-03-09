import React from 'react'
import InputMask from 'react-input-mask'
import { Label } from './Label'
import { LabelError } from './LabelError'

export function TextFormMask({
  register,
  errors,
  name,
  label,
  required = false,
  mask,
  disabled = false,
  placeholder = ' ',
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  mask: string
  disabled?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <Label label={label} name={name} />
      <InputMask
        mask={mask}
        type="text"
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

{
  /* <TextFormMask
  mask="99/99/99"
  label={'Data'}
  name={'data'}
  placeholder={'dd/mm/aa'}
  register={register}
  errors={errors}
  required
/> */
}
