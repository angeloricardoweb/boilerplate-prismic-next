import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="main_container">{children}</div>
}
