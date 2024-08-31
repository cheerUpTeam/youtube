import { create } from "zustand";

interface Filter {
  // 변수값만
  test: number;
  filter: string;
}

interface FilterProps extends Filter {
  // 함수들만
  onClickFilter: (text: string) => void;
}

const INIT = {
  // 변수값만
  test: 10,
  filter: "0",
};

export const useFilterStore = create<FilterProps>((set) => ({
  ...INIT,

  // 함수들만
  onClickFilter: (text) => set(() => ({ filter: text })),
}));
