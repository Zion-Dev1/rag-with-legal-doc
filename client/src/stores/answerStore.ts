import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AnswerStore = {
  answer: string;
  setAnswer: (newAnswer: string) => void;
};

const useAnswerStore = create<AnswerStore>()(
  persist(
    (set) => ({
      answer: "",
      setAnswer: (newAnswer) => set(() => ({ answer: newAnswer })),
    }),
    {
      name: "AnswerStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAnswerStore;
