import { create } from 'zustand'

type State = {
  authenticated: boolean
  setAuthenticated: (authenticated: boolean) => void
}

const useAuthenticated = create<State>((set) => ({
  authenticated: false,
  setAuthenticated: (authenticated: boolean) => {
    set(() => ({
      authenticated,
    }))
  },
}))

export default useAuthenticated
