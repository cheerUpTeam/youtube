import { useGoogleLogin } from "@react-oauth/google";
import { useCallback, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { PiMoonLight, PiSunLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

import MobileHeader from "@components/header/MobileHeader";
import PcHeader from "@components/header/PcHeader";
import { Link, useNavigate } from "react-router-dom";
import useDarkStore from "../store/darkStroe";
import useMenuStore from "../store/menuStroe";
import { useAuthStore } from "../store/authStore";

function Header() {
  const navigate = useNavigate();
  const { isLogin, setLogin, setLogout } = useAuthStore();
  const [inputValue, setInputValue] = useState("");

  const { toggleDarkMode, darkMode } = useDarkStore();
  const { toggleMenuMode } = useMenuStore();

  const hadleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    navigate(`/results/${inputValue}`);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setLogin(tokenResponse.access_token);
    },
  });

  const handleToggleDarkMode = useCallback(() => {
    // 상태 토글
    toggleDarkMode();

    // 로컬 스토리지 및 문서 클래스 업데이트
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }, [toggleDarkMode]);

  const onClickAuth = useCallback(() => {
    if (isLogin) setLogout();
    else login();
  }, [isLogin, setLogout, login]);

  return (
    <header className="fixed flex-center py-2 px-5 bg-basic-01 w-full z-30 ">
      <div className="flex-center gap-2">
        <CiMenuBurger
          className="size-6 cursor-pointer transition-all hover:fill-brand"
          onClick={toggleMenuMode}
          aria-label="menu button"
        />
        <Link to="/" className="flex-center gap-1">
          <FaYoutube className="text-3xl" />
          <p
            className="text-2xl
          font-semibold tracking-tighter "
          >
            YoungTube
          </p>
        </Link>
      </div>

      <PcHeader setInputValue={setInputValue} hadleSubmit={hadleSubmit} />
      <MobileHeader />

      <nav className="flex-center gap-2 justify-items-end">
        <button onClick={handleToggleDarkMode}>
          {darkMode ? (
            <PiMoonLight className="text-2xl" />
          ) : (
            <PiSunLight className="text-2xl font-thin" />
          )}
        </button>

        <p
          onClick={onClickAuth}
          className="flex-center border border-gray-300 rounded-3xl px-3 py-1 break-keep
          cursor-pointer text-[#065fd4] hover:bg-[#def1ff]"
        >
          <VscAccount className="fill-[#065fd4] size-5 mr-2 " />
          {isLogin ? "로그아웃" : "로그인"}
        </p>
      </nav>
    </header>
  );
}
export default Header;
