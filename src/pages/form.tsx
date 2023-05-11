import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  async function postForm(data) {
    console.log(data)
  }
  return (
    <div className="text-white">
      <form onSubmit={handleSubmit(postForm)}>
        <div>
          <h1>Dados Pessoais</h1>
          <div className="grid grid-cols-2 gap-2"></div>
        </div>
      </form>
    </div>
  )
}
