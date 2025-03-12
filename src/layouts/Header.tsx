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
import axios from "axios";

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
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        setLogin(tokenResponse.access_token, res.data.id);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
  });

  const handleToggleDarkMode = useCallback(() => {
    toggleDarkMode();

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
          className="size-6 cursor-pointer transition-all hover:fill-brand md:ml-2 md:mr-[1.70rem]"
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
