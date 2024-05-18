import { create } from 'zustand'

interface IMenuHamburguerStore {
  showMenuHamburguer: boolean
  setShowMenuHamburguer: (showMenuHamburguer: boolean) => void
}

const useMenuHamburguerStore = create<IMenuHamburguerStore>((set) => ({
  showMenuHamburguer: false,
  setShowMenuHamburguer: (showMenuHamburguer: boolean) => {
    set(() => ({
      showMenuHamburguer,
    }))
  },
}))

export default useMenuHamburguerStore
