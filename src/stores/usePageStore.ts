import { create } from 'zustand';

// تعریف وضعیت برای صفحه‌ها با Zustand
interface PageStore {
  isDetailPage: boolean;
  setIsDetailPage: (isDetail: boolean) => void;
}

// ایجاد استور Zustand
export const usePageStore = create<PageStore>((set) => ({
  isDetailPage: false, // حالت پیش‌فرض صفحه
  setIsDetailPage: (isDetail) => set({ isDetailPage: isDetail }), // تابع برای تغییر حالت صفحه
}));
