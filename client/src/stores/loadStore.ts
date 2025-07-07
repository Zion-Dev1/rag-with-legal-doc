import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LoadStoreState = { isDocLoaded: boolean };
type LoadStoreActions = { switchState: () => void };
type LoadStore = LoadStoreState & LoadStoreActions;

const useLoadStore = create<LoadStore>()(
  persist(
    (set) => ({
      isDocLoaded: false,
      switchState: () => set((state) => ({ isDocLoaded: !state.isDocLoaded })),
    }),
    {
      name: "loadStore",
      storage: createJSONStorage(() => localStorage), // ✅ correct type handling
    }
  )
);

export default useLoadStore;
