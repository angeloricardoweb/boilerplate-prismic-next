import React from 'react'

export function InfoLine({ title = "Title", value = "Value" }: { title: string, value: string }) {
    return (
        <div className='text-xl'>
            <strong >
                {title}:{" "}
            </strong>
            <span>
                {value}
            </span>
        </div>
    )
}
