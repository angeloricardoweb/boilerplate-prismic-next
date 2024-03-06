export function ZodAllErrors({ errors }: { errors: any }) {
    return (
        <div>
            {Object.keys(errors).map((key, index) => {
                return (
                    <small key={index} className='text-white font-bold block bg-red-500 px-2 py-1 rounded mb-1'>
                        {errors[key]?.message}
                    </small>
                )
            })}
        </div>
    )
}