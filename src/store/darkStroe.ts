import { create } from "zustand";
interface DarkProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkStore = create<DarkProps>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useDarkStore;
