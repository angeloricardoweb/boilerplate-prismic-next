export function ZodSingleError({ name, errors }: { name: string, errors: any }) {
    return (
        <div>
            {errors[name] &&
                <small className='rounded-full bg-red-400 px-3 py-1 font-bold'>
                    {errors[name]?.message}
                </small>
            }
        </div>
    )
}
