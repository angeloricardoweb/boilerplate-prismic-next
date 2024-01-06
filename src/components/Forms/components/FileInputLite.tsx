import React, { useEffect } from 'react'
import { LabelError } from './LabelError'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'

export function FileInputLite({
  label,
  name,
  register,
  errors,
  required = false,
  disabled = false,
  placeholder = ' ',
}: {
  label: string
  name: string
  register: any
  errors: any
  required?: boolean
  disabled?: boolean
  placeholder?: string
}) {
  const [file, setFile] = React.useState<any>(null);

  return (
    <div>
      <span className="label">
        {label}
      </span>
      <label htmlFor={name} className="input-text h-16 relative">
        {file?.length > 0 ? `${file?.length} anexos` : placeholder}
        <input
          type="file"
          id={name}
          multiple={true}
          placeholder={placeholder}
          style={errors[name] && { border: '1px solid red' }}
          {...register(name)}
          className="hidden"
          disabled={disabled}
          onChange={(e) => {
            setFile(e.target.files)
          }}
        />
        <Icon icon='ph:camera-fill' className='text-4xl text-brand-blue absolute right-2
        top-1/2 transform -translate-y-1/2'/>

      </label>
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
