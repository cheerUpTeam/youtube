import { create } from "zustand";
interface SearchProps {
  searchMode: boolean;
  toggleSearchMode: () => void;
}

const useSearchStore = create<SearchProps>((set) => ({
  searchMode: false,
  toggleSearchMode: () => set((state) => ({ searchMode: !state.searchMode })),
}));

export default useSearchStore;
