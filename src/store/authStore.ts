import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Auth {
  // 변수값만
  isLogin: boolean;
  token: string;
  userId: string;
}

interface AuthProps extends Auth {
  // 함수들만
  setLogin: (token: string, userId: string) => void;
  setLogout: () => void;
}

const INIT = {
  // 변수값만
  isLogin: false,
  token: "",
  userId: "",
};

// export const useAuthStore = create<AuthProps>((set) => ({
//   ...INIT,

//   // 함수들만
//   setLogin: (token) => set(() => ({ isLogin: true, token })),
//   setLogout: () => set({ ...INIT }),
// }));

export const useAuthStore = create(
  persist<AuthProps>(
    (set) => ({
      ...INIT,

      setLogin: (token, userId) =>
        set(() => ({ isLogin: true, token, userId })),
      setLogout: () => set({ ...INIT }),
    }),
    {
      name: "auth",
    }
  )
);
