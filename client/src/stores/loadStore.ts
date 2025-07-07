import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LoadStore = {
  isDocLoaded: boolean;
  switchState: () => void;
};

const useLoadStore = create<LoadStore>()(
  persist(
    (set) => ({
      isDocLoaded: false,
      switchState: () => set((state) => ({ isDocLoaded: !state.isDocLoaded })),
    }),
    {
      name: "loadStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoadStore;
