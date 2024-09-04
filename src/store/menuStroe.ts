import { create } from "zustand";
interface MenuProps {
  menuMode: boolean;
  toggleMenuMode: () => void;
}

const useMenuStore = create<MenuProps>((set) => ({
  menuMode: false,
  toggleMenuMode: () => set((state) => ({ menuMode: !state.menuMode })),
}));

export default useMenuStore;
