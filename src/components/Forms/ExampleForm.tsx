import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextForm } from './components/TextForm'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { TextFormPassword } from './components/TextFormPassword'
import { DateForm } from './components/DateForm'
import { SelectInput } from './components/SelectInput'
import { TextAreaForm } from './components/TextAreaForm'
import { TextFormMask } from './components/TextFormMask'
import { convertToPhoneNumber } from '../../utils/convertToPhoneNumber'
import { Label } from './components/Label'

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nome deve conter no minimo 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    nascimento: z.string().optional(),
    lang: z.string().optional(),
    descricao: z.string().min(10, { message: 'Descrição muito curta' }),
    telefone: z.string().min(15, { message: 'Telefone inválido' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof registerSchema>

export function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  async function postForm(data: FormData) {
    console.log(data)
  }

  return (
    <div className="flex items-center w-full h-screen">
      <form
        onSubmit={handleSubmit(postForm)}
        className="grid grid-cols-2 gap-2 mx-auto max-w-4xl"
      >
        <TextForm
          register={register}
          errors={errors}
          name={'name'}
          label={'Nome'}
        />
        <TextForm
          register={register}
          errors={errors}
          name={'email'}
          label={'E-mail'}
        />

        <TextFormPassword
          register={register}
          errors={errors}
          name={'password'}
          label={'Senha'}
        />
        <div>
          <Label label={'Telefone'} name={'telefone'} />
          <input
            type="text"
            placeholder="(__) _____-____"
            {...(register('telefone'),
            {
              onChange: (e) => {
                convertToPhoneNumber(e.target.value)
              },
            })}
            className="input-text"
            style={errors['telefone'] && { border: '1px solid red' }}
          />
        </div>
        <TextFormPassword
          register={register}
          errors={errors}
          name={'confirmPassword'}
          label={'Confirmação de senha'}
        />
        <SelectInput
          register={register}
          errors={errors}
          name={'lang'}
          label={'Linguagem favorita'}
          options={[
            {
              label: 'JavaScript',
              value: 'javascript',
            },
            {
              label: 'Php',
              value: 'php',
            },
          ]}
        />
        <TextAreaForm
          register={register}
          errors={errors}
          name={'descricao'}
          label={'Descrição'}
        />
        <DateForm
          register={register}
          errors={errors}
          name={'nascimento'}
          label={'Data de Nascimento'}
        />
        <ButtonPrimary type="submit">Enviar</ButtonPrimary>
      </form>
    </div>
  )
}
