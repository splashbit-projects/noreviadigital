import { create } from 'zustand';

import type { Service, Solution } from './types';

type UseSolutionPopupStore = {
  popupOpened: boolean;
  isSuccess: boolean;
  solution?: Solution;
  service?: Service;
  setService: (service?: Service) => void;
  setSolution: (solution?: Solution) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setPopupOpened: (popupOpened: boolean) => void;
};

export const useSolutionPopup = create<UseSolutionPopupStore>((set) => ({
  popupOpened: false,
  isSuccess: false,
  solution: undefined,
  service: undefined,
  setService: (service?: Service) => set({ service }),
  setSolution: (solution?: Solution) => set({ solution }),
  setPopupOpened: (popupOpened: boolean) => set({ popupOpened }),
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
