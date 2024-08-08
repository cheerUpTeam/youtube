import { FormEvent, useState } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`results/${inputValue}`);
  };
  // react -> 웹이 모바일앱(깜빡임 x)

  return (
    <div className="flex items-center w-full ">
      <div className="flex items-center gap-5">
        <CiMenuBurger className="text-2xl" />
        <Link to={"/"} className="flex items-center text-3xl">
          <FaYoutube />
          YouTube
        </Link>
      </div>
      <form
        className="flex items-center border rounded-3xl overflow-hidden w-full mx-auto"
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
    </div>
  );
}
export default Header;
