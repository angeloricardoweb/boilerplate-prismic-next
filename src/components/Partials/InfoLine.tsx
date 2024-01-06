import React from 'react'

export function InfoLine({ title = "Title", value = "Value" }: { title: string, value: string }) {
    return (
        <strong className='text-xl block'>{title}: {value}</strong>
    )
}
