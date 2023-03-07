import React from 'react'

export function LabelError({
  msg,
  hasError = true,
}: {
  msg: string
  hasError: {}
}) {
  if (hasError) {
    return (
      <label>
        <span className="label-text-alt text-red-600">{msg}</span>
      </label>
    )
  } else {
    return <></>
  }
}
