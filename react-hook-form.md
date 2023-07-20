## Básico
```jsx

    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = useForm()

    async function postForm(data: FormData) {
        console.log(data)
    }

    <form onSubmit={handleSubmit(postForm)}>

    <input
        type="text"
        {...register("nome", {
            required: "Campo obrigatório",
            minLength: {
                value: 3,
                message: "Nome deve conter no minimo 3 caracteres",
            },
        })}

    />

```

## Usando Zod
```jsx
import * as z from 'zod'

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

const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm < FormData > { resolver: zodResolver(registerSchema) }
```
