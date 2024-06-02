export function ZodAllErrors({ errors }: { errors: any }) {
  return (
    <div>
      {Object.keys(errors).map((key, index) => {
        return (
          <small
            key={index}
            className="mb-1 block rounded bg-red-500 px-2 py-1 font-bold text-white"
          >
            {errors[key]?.message}
          </small>
        )
      })}
    </div>
  )
}
