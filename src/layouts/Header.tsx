import MdHeader from "@components/header/MdHeader";
import { useGoogleLogin } from "@react-oauth/google";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import SmHeader from "@components/header/SmHeader";

interface HeaderProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

function Header({ setToggle }: HeaderProps) {
  const navigate = useNavigate();

  const onClickMenu = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);
  const [inputValue, setInputValue] = useState("");

  const hadleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(`/results/${inputValue}`);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <header className="flex-center my-2 px-5 ">
      <div className="flex-center gap-2">
        <CiMenuBurger
          className="size-6 cursor-pointer transition-all hover:fill-brand"
          onClick={onClickMenu}
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

      <MdHeader setInputValue={setInputValue} hadleSubmit={hadleSubmit} />
      <SmHeader setInputValue={setInputValue} hadleSubmit={hadleSubmit} />

      <nav className="flex-center gap-2 justify-items-end">
        <HiOutlineDotsVertical className="size-6" />
        <p
          onClick={() => login()}
          className="flex-center border border-gray-300 rounded-3xl px-3 py-1 break-keep
          cursor-pointer text-[#065fd4] hover:bg-[#def1ff]"
        >
          <VscAccount className="fill-[#065fd4] size-5 mr-2 " />
          로그인
        </p>
      </nav>
    </header>
  );
}
export default Header;
