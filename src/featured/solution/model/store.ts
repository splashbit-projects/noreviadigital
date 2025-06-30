import { create } from 'zustand';

import type { Solution } from './types';

type UseSolutionPopupStore = {
  popupOpened: boolean;
  isSuccess: boolean;
  solution?: Solution;
  setSolution: (solution?: Solution) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setPopupOpened: (popupOpened: boolean) => void;
};

export const useSolutionPopup = create<UseSolutionPopupStore>((set) => ({
  popupOpened: false,
  isSuccess: false,
  solution: undefined,
  setSolution: (solution?: Solution) => set({ solution }),
  setPopupOpened: (popupOpened: boolean) => set({ popupOpened }),
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
