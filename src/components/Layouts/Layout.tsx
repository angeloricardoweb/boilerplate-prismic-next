import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mt-20 min-h-screen">{children}</div>
}
