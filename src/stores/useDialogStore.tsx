import { create } from 'zustand';

interface IDialogStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDialogStore = create<IDialogStore>(
  (set) => ({
    open: false,
    setOpen: (open) => set({ open }),
  })
);
