import { create } from 'zustand'
import { IStaffStore, StaffType } from '../protocols'

interface IMenuHamburguerStore {
  showMenuHamburguer: boolean
  setShowMenuHamburguer: (showMenuHamburguer: boolean) => void
}

const useMenuHamburguerStore = create<IMenuHamburguerStore>((set) => ({
  showMenuHamburguer: false,
  setShowMenuHamburguer: (showMenuHamburguer: boolean) => {
    set((state) => ({
      showMenuHamburguer: showMenuHamburguer,
    }))
  },
}))

export default useMenuHamburguerStore
