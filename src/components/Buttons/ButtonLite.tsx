import React from 'react'

export function ButtonLite(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="bg-zinc-100 hover:bg-zinc-300 transition-all px-3 py-2 rounded-md text-[14px]"
    />
  )
}
