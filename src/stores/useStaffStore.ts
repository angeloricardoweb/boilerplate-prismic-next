import { create } from 'zustand'
import { IStaffStore, StaffType } from '../protocols'

const useStaffStore = create<IStaffStore>((set) => ({
  staffs: [],
  setStaffs: (staffs: StaffType[]) => {
    set((state) => ({
      staffs: staffs,
    }))
  },
}))

export default useStaffStore
