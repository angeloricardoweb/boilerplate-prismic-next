import React from 'react'
import { useForm } from 'react-hook-form'
import { TextForm } from './TextForm'
import { TextFormPassword } from './TextFormPassword'

interface FormProps {
  email: string
  senha: string
}

export function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormProps>()

  async function handleLogin({ email, senha }: FormProps) {
    console.log(email, senha)
    reset({ email: '', senha: '' })
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>Example Form</h1>
      <TextForm
        name={'email'}
        label={'E-mail'}
        register={register}
        errors={errors}
        required
      />
      <TextFormPassword
        name={'senha'}
        label={'Senha'}
        register={register}
        errors={errors}
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}
