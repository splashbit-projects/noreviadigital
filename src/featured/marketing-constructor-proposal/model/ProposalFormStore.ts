import { create } from 'zustand';

type Service = {
  id: string;
  name: string;
};

type ProposalFormStoreStore = {
  selectedServices: Service[];
  isSuccess: boolean;
  setSelectedServices: (selectedServices: Service[]) => void;
  setIsSuccess: (isSuccess: boolean) => void;
};

export const useProposalFormStore = create<ProposalFormStoreStore>((set) => ({
  selectedServices: [],
  isSuccess: false,
  setSelectedServices: (selectedServices: Service[]) => set({ selectedServices }),
  setIsSuccess: (isSuccess: boolean) => set({ isSuccess }),
}));
