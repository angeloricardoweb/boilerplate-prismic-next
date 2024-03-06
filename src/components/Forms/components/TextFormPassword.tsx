import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { LabelError } from './LabelError'

export function TextFormPassword({
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
  const [showPassword, setShowPassword] = useState('password')

  return (
    <div className="relative">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={showPassword}
        minLength={6}
        className="input-text"
        style={errors[name] && { border: '1px solid red' }}
        {...register(name)}
      />
      <span
        className="cursor-pointer absolute right-2 top-1/2"
        onClick={() =>
          setShowPassword(showPassword === 'password' ? 'text' : 'password')
        }
      >
        {showPassword === 'password' ? (
          <Icon
            icon="ant-design:eye-invisible-outlined"
            className="text-zinc-400"
            width="20"
            height="20"
          />
        ) : (
          <Icon
            icon="ant-design:eye-outlined"
            width="20"
            height="20"
            className="text-zinc-400"
          />
        )}
      </span>
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
