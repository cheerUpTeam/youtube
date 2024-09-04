import { CiSearch as SearchIcon } from "react-icons/ci";
import useSearchStore from "../../store/searchStore";

function MobileHeader() {
  const { toggleSearchMode } = useSearchStore();

  return (
    <nav className="flex-center justify-end sm:hidden flex-1">
      <button
        onClick={toggleSearchMode}
        className="hover:rounded-full hover:bg-border-01"
      >
        <SearchIcon className="cursor-pointer size-10 p-2" />
      </button>
    </nav>
  );
}

export default MobileHeader;
