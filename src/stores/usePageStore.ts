import { create } from 'zustand';


interface PageStore {
  isDetailPage: boolean;
  setIsDetailPage: (isDetail: boolean) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  isDetailPage: false, 
  setIsDetailPage: (isDetail) => set({ isDetailPage: isDetail }),
}));
