import { create } from 'zustand';

type UserType = {
  name: string;
  email: string;
  id: number;
};

type State = {
  users: UserType[];
  addUsers: (user: UserType) => void;
  removeUser: (id: number) => void;
};

const useUserStore = create<State>((set) => ({
  users: [],

  addUsers: (user: UserType) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  removeUser: (id: number) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
}));

export default useUserStore;
