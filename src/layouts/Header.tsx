import { useGoogleLogin } from "@react-oauth/google";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

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
    <header className="flex [&_*]:flex [&_*]:items-center [&>*]:gap-5 justify-between my-2 px-5">
      <div>
        <CiMenuBurger
          className="size-6 cursor-pointer transition-all hover:fill-brand"
          onClick={onClickMenu}
          aria-label="menu button"
        />
        <Link to="/" className="gap-1">
          <FaYoutube className="text-3xl" />
          <p
            className="text-2xl
          font-semibold tracking-tighter "
          >
            YoungTube
          </p>
        </Link>
      </div>

      <nav>
        <form
          onSubmit={hadleSubmit}
          className="border border-gray-300 rounded-3xl overflow-hidden bg-gray-100"
        >
          <input
            className="rounded-l-3xl p-2 px-4 border-e border-gray-300 shadow-inner"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.currentTarget.value);
            }}
            type="text"
            placeholder="검색"
          />
          <button>
            <CiSearch className="mx-5 cursor-pointer text-2xl" />
          </button>
        </form>
        <FaMicrophone className="size-10  p-3 cursor-pointer rounded-full bg-gray-100 " />
      </nav>

      <nav>
        <HiOutlineDotsVertical className="size-6" />
        <p
          onClick={() => login()}
          className="border border-gray-300 rounded-3xl px-3 py-1 break-keep
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
