import React from 'react'

type LabelErrorProps = {
  hasError: boolean
  errorMessage: string
}

export function LabelError({ errorMessage, hasError = true }: LabelErrorProps) {
  if (hasError) {
    return (
      <label>
        <span className="label-text-alt text-red-600">{errorMessage}</span>
      </label>
    )
  } else {
    return <></>
  }
}
