import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LabelError } from '../components/Forms/components/LabelError'

const registerSchema = z.object({
  nome: z
    .string()
    .min(3, { message: 'Nome deve conter no minimo 3 caracteres' }),
  cargo: z.string().refine((value) => {
    return value !== 'Selecione uma opção'
  }, 'Selecione uma opção'),
  password: z
    .string()
    .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
  confirmPassword: z
    .string()
    .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
  acceptTerms: z.boolean().refine((value) => {
    return value === true
  }, 'Você deve aceitar os termos de uso para continuar'),
  possuiCnpj: z.string().refine((value) => {
    return value !== ''
  }, 'Selecione uma opção'),
  email: z.string().email({ message: 'E-mail inválido' }),
  confirmEmail: z.string().email({ message: 'E-mail inválido' }),
})

type FormData = z.infer<typeof registerSchema>

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  async function postForm(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2500))
    alert(JSON.stringify(data, null, 2))
  }
  return (
    <div className="flex items-center w-full h-screen">
      <form
        onSubmit={handleSubmit(postForm)}
        className="max-w-3xl mx-auto px-10 sm:px-2 flex-grow"
      >
        <div>
          <h1 className="text-zinc-800 text-center font-bold text-2xl">
            Dados Pessoais
          </h1>
          <div className="md:grid grid-cols-2 gap-10 mt-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nome</span>
              </label>
              <input
                type="text"
                placeholder="Digite o seu nome"
                className="input input-bordered w-full"
                {...register('nome')}
              />
              <LabelError
                hasError={Boolean(errors.nome)}
                errorMessage={errors.nome?.message ?? 'Erro no campo'}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Cargo</span>
              </label>
              <select className="select select-bordered" {...register('cargo')}>
                <option disabled selected>
                  Selecione uma opção
                </option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
              <LabelError
                hasError={Boolean(errors.cargo)}
                errorMessage={errors.cargo?.message ?? 'Erro no campo'}
              />
            </div>
            <div className="col-span-2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Possui CNPJ ou MEI</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="radio-1"
                    className="radio radio-primary"
                    {...register('possuiCnpj')}
                    checked
                  />
                  <label htmlFor="radio-1">
                    <span className="mr-4">Sim</span>
                  </label>
                  <input
                    type="radio"
                    id="radio-2"
                    {...register('possuiCnpj')}
                    className="radio radio-primary"
                  />
                  <label htmlFor="radio-2">
                    <span className="mr-4">Não</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="email"
                placeholder="Digite o seu e-mail"
                className="input input-bordered w-full"
                {...register('email')}
              />
              <LabelError
                hasError={Boolean(errors.email)}
                errorMessage={errors.email?.message ?? 'Erro no campo'}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Confirme seu E-mail</span>
              </label>
              <input
                type="email"
                placeholder="Digite novamente o seu e-mail"
                className="input input-bordered w-full"
                {...register('confirmEmail')}
              />
              <LabelError
                hasError={Boolean(errors.confirmEmail)}
                errorMessage={errors.confirmEmail?.message ?? 'Erro no campo'}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Crie uma senha</span>
              </label>
              <input
                type="password"
                placeholder="Digite uma senha de acesso"
                className="input input-bordered w-full"
                {...register('password')}
              />
              <LabelError
                hasError={Boolean(errors.password)}
                errorMessage={errors.password?.message ?? 'Erro no campo'}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Confirme sua senha</span>
              </label>
              <input
                type="password"
                placeholder="Digite novamente a senha criada"
                className="input input-bordered w-full"
                {...register('confirmPassword')}
              />
              <LabelError
                hasError={Boolean(errors.confirmPassword)}
                errorMessage={
                  errors.confirmPassword?.message ?? 'Erro no campo'
                }
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register('acceptTerms')}
                />
                <span className="ml-2 label-text font-normal">
                  Aceito os <strong className="font-bold">Termos de Uso</strong>{' '}
                  e{' '}
                  <strong className="font-bold">
                    Políticas de Privacidade
                  </strong>
                </span>
              </label>
              <LabelError
                hasError={Boolean(errors.acceptTerms)}
                errorMessage={errors.acceptTerms?.message ?? 'Erro no campo'}
              />
            </div>
          </div>
          <div className="mt-10 md:flex items-center gap-10 w-full justify-center mx-auto max-w-xs">
            <button
              className="btn btn-outline"
              type="button"
              disabled={isSubmitting}
            >
              Voltar
            </button>
            <button
              className="btn btn-primary mt-5 sm:mt-0"
              type="submit"
              disabled={isSubmitting}

            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0
                      014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Concluir cadastro'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
