import { CiSearch } from "react-icons/ci";
import { IoArrowBackSharp } from "react-icons/io5";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../store/searchStore";

function SearchHeader() {
  const navigate = useNavigate();

  const { toggleSearchMode } = useSearchStore();
  const [inputValue, setInputValue] = useState("");

  const hadleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    navigate(`/results/${inputValue}`);
  };
  console.log(inputValue);
  return (
    <aside className="left-0 fixed w-full h-screen">
      <div className="flex flex-center px-5 mt-2 bg-basic-01 gap-4">
        <button onClick={toggleSearchMode}>
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
      </div>
      <div onClick={toggleSearchMode} className="w-full h-screen" />
    </aside>
  );
}

export default SearchHeader;
