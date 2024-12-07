import { CheckCircle, CircleX, Info, X } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

{
  /* <button onClick={() => toast.custom((t) => <SuccessToast t={t} />)}>
    Toast
</button> */
}

export function SuccessToast({
  t,
  title = 'title',
  description = 'description',
}: {
  t: any
  title: string
  description: string
}) {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded 
      pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-l-8 border-emerald-500`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <p className="text-emerald-500">
            <CheckCircle size={40} />
          </p>
          <div className="ml-3 flex-1">
            <p className="text-xl font-bold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-emerald-500 focus:outline-none focus:text-red-500"
        >
          <X />
        </button>
      </div>
    </div>
  )
}

export function ErrorToast({
  t,
  title = 'title',
  description = 'description',
}: {
  t: any
  title: string
  description: string
}) {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded 
          pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-l-8 border-red-500`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <p className="text-red-500">
            <CircleX size={40} />
          </p>
          <div className="ml-3 flex-1">
            <p className="text-xl font-bold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 focus:outline-none focus:text-red-500"
        >
          <X />
        </button>
      </div>
    </div>
  )
}
export function InfoToast({
  t,
  title = 'title',
  description = 'description',
}: {
  t: any
  title: string
  description: string
}) {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded 
          pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-l-8 border-blue-500`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <p className="text-blue-500">
            <Info size={40} />
          </p>
          <div className="ml-3 flex-1">
            <p className="text-xl font-bold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 focus:outline-none focus:text-red-500"
        >
          <X />
        </button>
      </div>
    </div>
  )
}
