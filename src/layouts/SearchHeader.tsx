import { CiSearch } from "react-icons/ci";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";

import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchHeaderProps {
  setSearchToggle: Dispatch<SetStateAction<boolean>>;
}

function SearchHeader({ setSearchToggle }: SearchHeaderProps) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const hadleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    navigate(`/results/${inputValue}`);
  };

  const onClickSearch = useCallback(() => {
    setSearchToggle((toggle) => !toggle);
  }, []);

  return (
    <aside className="left-0 fixed w-full h-screen">
      <div className="flex flex-center px-5 mt-2 bg-basic-01 gap-4">
        <button onClick={onClickSearch}>
          <IoArrowBackSharp className="size-5" />
        </button>

        <form
          onSubmit={hadleSubmit}
          className="flex-center flex-1 border border-border-01 rounded-3xl overflow-hidden"
        >
          <input
            className="flex-1 w-full box-border rounded-l-3xl p-2 px-4 border-e border-border-01 shadow-inner bg-basic-01"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.currentTarget.value);
            }}
            type="text"
            placeholder="검색"
          />
          <button type="submit">
            <CiSearch className="mx-5 cursor-pointer text-2xl" />
          </button>
        </form>
        <FaMicrophone className="shrink-0 size-4 cursor-pointer" />
      </div>
      <div onClick={onClickSearch} className="w-full h-screen" />
    </aside>
  );
}

export default SearchHeader;
