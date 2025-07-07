import { create } from "zustand";

interface LoadStore {
  isDocLoaded: boolean;
  switchState: () => void;
}

const useLoadStore = create<LoadStore>((set) => ({
  isDocLoaded: false,
  switchState: () => set((state) => ({ isDocLoaded: !state.isDocLoaded })),
}));

export default useLoadStore;
