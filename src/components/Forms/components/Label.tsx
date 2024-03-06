import React from 'react'

export function Label({ name, label }: { name: string; label: string }) {
  return (
    <label htmlFor={name} className="label">
      {label}
    </label>
  )
}
