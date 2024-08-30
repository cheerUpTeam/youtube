import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

function SmHeader({ setInputValue, hadleSubmit }) {
  return (
    <nav className="flex-center justify-end sm:hidden flex-1">
      <button className=" hover:rounded-full hover:bg-gray-100">
        <CiSearch className="cursor-pointer size-10 p-2" />
      </button>

      <FaMicrophone className="hidden min-[500px]:block shrink-0 size-10 p-3 cursor-pointer hover:rounded-full hover:bg-gray-100" />
    </nav>
  );
}

export default SmHeader;
