import { create } from 'zustand';

type UseGeneralRequestPopupStore = {
  open: boolean;
  isSuccess: boolean;
  setIsSuccess: (isSuccess: boolean) => void;
  setOpen: (popupOpened: boolean) => void;
};

export const useGeneralRequestPopup = create<UseGeneralRequestPopupStore>((set) => ({
  open: false,
  isSuccess: false,
  setOpen: (open: boolean) => set({ open }),
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
