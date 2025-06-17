import { create } from 'zustand';

type Service = {
  id: string;
  name: string;
};

type SelectedServicesStore = {
  selectedServices: Service[];
  setSelectedServices: (selectedServices: Service[]) => void;
};

export const useSelectedServicesStore = create<SelectedServicesStore>((set) => ({
  selectedServices: [],
  setSelectedServices: (selectedServices: Service[]) => set({ selectedServices }),
}));
