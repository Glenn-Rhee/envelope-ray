import { create } from "zustand";

interface UseLetter {
  isBoxOpen: boolean;
  setIsBoxOpen: (box: boolean) => void;
  isEnvelopeOpen: boolean;
  setIsEnvelopeOpen: (envelope: boolean) => void;
}

export const useLetter = create<UseLetter>((set) => ({
  isBoxOpen: false,
  isEnvelopeOpen: false,
  setIsBoxOpen: (box: boolean) => set({ isBoxOpen: box }),
  setIsEnvelopeOpen: (envelope: boolean) => set({ isEnvelopeOpen: envelope }),
}));
