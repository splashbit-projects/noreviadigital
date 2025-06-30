import { create } from 'zustand';

type UrgentRequestStore = {
  popupOpened: boolean;
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
  setPopupOpened: (popupOpened: boolean) => void;
};

export const useUrgentRequestStore = create<UrgentRequestStore>((set) => ({
  popupOpened: false,
  isSuccess: false,
  setPopupOpened: (popupOpened: boolean) => set({ popupOpened }),
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
