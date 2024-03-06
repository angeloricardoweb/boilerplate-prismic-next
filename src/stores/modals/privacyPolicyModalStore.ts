import { create } from 'zustand';

type State = {
  modalState: boolean;
  setModalState: (state: boolean) => void;
};

const privacyPolicyModalStore = create<State>((set) => ({
  modalState: false,
  setModalState(modalState: boolean) {
    set({ modalState });
  },
}));

export default privacyPolicyModalStore;
