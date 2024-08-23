import { Dispatch, SetStateAction, useCallback } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Searchform from "@components/Searchform";
import LoginIcon from "@components/LoginIcon";

interface HeaderProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

function Header({ setToggle }: HeaderProps) {
  const onClickMenu = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);
  // const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {}, []);

  return (
    <header className="flex items-center my-2">
      <div className="flex items-center gap-5">
        <CiMenuBurger
          className="size-6 cursor-pointer transition-all hover:fill-brand"
          onClick={onClickMenu}
          aria-label="menu button"
        />
        <Link to="/" className="flex items-center gap-1">
          <FaYoutube className="text-3xl" />
          <p
            className="text-2xl
          font-semibold tracking-tighter "
          >
            YoungTube
          </p>
        </Link>
      </div>
      <Searchform />
      <LoginIcon />
    </header>
  );
}
export default Header;
