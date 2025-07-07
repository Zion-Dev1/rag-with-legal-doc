import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type QueryStore = {
  query: string;
  setQuery: (newQuery: string) => void;
};

const useQueryStore = create<QueryStore>()(
  persist(
    (set) => ({
      query: "",
      setQuery: (newQuery) => set(() => ({ query: newQuery })),
    }),
    {
      name: "queryStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useQueryStore;
