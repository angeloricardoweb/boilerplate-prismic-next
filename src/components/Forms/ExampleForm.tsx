'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Buttons/Button'
import {
  normalizeCepNumber,
  normalizeCnpjNumber,
  normalizeCpfNumber,
  normalizePhoneNumber,
} from './masks'
import { ZodAllErrors } from './components/ZodAllErrors'

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nome deve conter no minimo 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    cpf: z.string().min(14, { message: 'CPF inválido' }),
    cnpj: z.string().min(18, { message: 'CNPJ inválido' }),
    cep: z.string().min(9, { message: 'CEP inválido' }),
    password: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    lang: z.string().min(1, { message: 'Selecione uma linguagem' }),
    descricao: z.string().min(10, { message: 'Descrição muito curta' }),
    telefone: z.string().min(15, { message: 'Telefone inválido' }),
    file: z.any().refine((val) => val.length > 0, 'Arquivo obrigatório'),
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
    reset,
    setValue,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  const phoneValue = watch('telefone')
  const cpfValue = watch('cpf')
  const cnpjValue = watch('cnpj')
  const cepValue = watch('cep')

  async function postForm(data: FormData) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    reset()
  }

  useEffect(() => {
    setValue('telefone', normalizePhoneNumber(phoneValue))
  }, [phoneValue, setValue])

  useEffect(() => {
    setValue('cpf', normalizeCpfNumber(cpfValue))
  }, [cpfValue, setValue])

  useEffect(() => {
    setValue('cnpj', normalizeCnpjNumber(cnpjValue))
  }, [cnpjValue, setValue])

  useEffect(() => {
    setValue('cep', normalizeCepNumber(cepValue))
  }, [cepValue, setValue])

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit(postForm)}
        className="mx-auto grid max-w-4xl grid-cols-3 gap-2"
      >
        <fieldset>
          <label htmlFor="nome" className="b-label">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            {...register('name')}
            style={errors.name && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="John"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email" className="b-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            style={errors.email && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="voce@email.com"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="telefone" className="b-label">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            placeholder="(99) 99999-9999"
            {...register('telefone')}
            className="b-input-text"
            style={errors.telefone && { border: '1px solid red' }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="cep" className="b-label">
            CEP
          </label>
          <input
            type="text"
            id="cep"
            placeholder="99999-999"
            {...register('cep')}
            className="b-input-text"
            style={errors.cep && { border: '1px solid red' }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="cpf" className="b-label">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            placeholder="999.999.999-99"
            {...register('cpf')}
            className="b-input-text"
            style={errors.cpf && { border: '1px solid red' }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="cnpj" className="b-label">
            CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            placeholder="99.999.999/9999-99"
            {...register('cnpj')}
            className="b-input-text"
            style={errors.cnpj && { border: '1px solid red' }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password" className="b-label">
            Senha
          </label>
          <input
            type="password"
            id="password"
            {...register('password')}
            style={errors.password && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="********"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="confirmPassword" className="b-label">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
            style={errors.confirmPassword && { border: '1px solid red' }}
            className="b-input-text"
            placeholder="********"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="lang" className="b-label">
            Selecionar Linguagem
          </label>
          <select
            id="lang"
            className="b-input-select"
            {...register('lang')}
            style={errors.lang && { border: '1px solid red' }}
          >
            <option defaultValue={''}>Selecione</option>
            <option value="javascript">JavaScript</option>
            <option value="php">Php</option>
            <option value="python">Python</option>
          </select>
        </fieldset>

        <fieldset className="col-span-3">
          <label htmlFor="descricao" className="b-label">
            Descrição
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('descricao')}
            style={errors.descricao && { border: '1px solid red' }}
            className="b-input-textarea"
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </fieldset>

        <fieldset className="col-span-3">
          <label className="b-label" htmlFor="file_input">
            Arquivo
          </label>
          <input
            className="b-input-file"
            {...register('file')}
            style={errors.file && { border: '1px solid red' }}
            id="file_input"
            type="file"
          />
        </fieldset>

        <div className="col-span-3">
          <ZodAllErrors errors={errors} />
        </div>

        <div className="col-span-3">
          <Button variant="primaryGreen" type="submit" isLoading={isSubmitting}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  )
}
