export function ZodAllErrors({ errors }: { errors: any }) {
    return (
        <div className="bg-red-400 p-3 rounded">
            {Object.keys(errors).map((key, index) => {
                return (
                    <small key={index} className='text-white font-bold block'>
                        {errors[key]?.message}
                    </small>
                )
            })}
        </div>
    )
}