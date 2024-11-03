import { create } from 'zustand';

interface ThemeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => {

  const isBrowser = typeof window !== 'undefined'; 
  const initialDarkMode = isBrowser ? localStorage.getItem('darkMode') === 'true' : false;

  return {
    darkMode: initialDarkMode,
    toggleDarkMode: () => {
      set((state) => {
        const newDarkMode = !state.darkMode;
        if (isBrowser) {
          localStorage.setItem('darkMode', newDarkMode.toString());
        }
        return { darkMode: newDarkMode };
      });
    },
  };
});

export default useThemeStore;
