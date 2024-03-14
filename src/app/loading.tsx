import Icon from '@/components/Adapters/Icon'
import React from 'react'

export default async function Page() {
    return (
        <div className=" w-screen h-screen flex items-center justify-center">
            <Icon icon="mdi:loading" className="hover:scale-105 transition-all animate-spin" fontSize={48} />
        </div>
    )
}
