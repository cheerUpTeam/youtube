import {
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

function Header({ setToggle }: HeaderProps) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      inputValue && navigate(`results/${inputValue}`);
    },
    [inputValue]
  );

  const onClickMenu = useCallback(() => {
    setToggle((toggle) => !toggle);
  }, []);
  // const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {}, []);

  return (
    <header className="flex items-center">
      <div className="flex items-center gap-5">
        <CiMenuBurger
          className="size-6 cursor-pointer transition-all hover:fill-brand"
          onClick={onClickMenu}
          aria-label="menu button"
        />
        <Link to="/" className="flex items-center gap-1">
          <FaYoutube className="text-3xl" />
          <p
            className="hidden text-2xl
          font-semibold md:block 
          "
          >
            YouTube
          </p>
        </Link>
      </div>
      <form
        className="flex items-center border rounded-3xl overflow-hidden mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="outline-none px-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="search"
        />
        <button
          type="submit"
          className="rounded-none border-l-gray-200 outline-none"
        >
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
export default Header;
