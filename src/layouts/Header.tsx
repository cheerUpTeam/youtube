import { FormEvent, MouseEvent, useCallback, useState } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ toggle, setToggle }: HeaderProps) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    navigate(`results/${inputValue}`);
  }, []);
  const onClickMenu = useCallback(
    (e: MouseEvent<HTMLOrSVGElement>) => {
      setToggle((toggle) => !toggle);
    },
    [toggle]
  );
  // const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {}, []);

  return (
    <header className="flex items-center">
      <div className="flex items-center gap-5">
        <CiMenuBurger
          className="size-6 cursor-pointer transition-all hover:fill-brand"
          onClick={onClickMenu}
          aria-label="menu button"
        />
        <Link to="/" className="flex items-center text-xl">
          <FaYoutube />
          YouTube
        </Link>
      </div>
      <form
        className="flex items-center border rounded-3xl overflow-hidden mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="search"
        />
        <button type="submit" className="rounded-none border-l-gray-200">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
export default Header;
