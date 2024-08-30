import { useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

interface SmHeaderProps {}
function SmHeader({ setSearchToggle }: SmHeaderProps) {
  const onClickSearch = useCallback(() => {
    setSearchToggle((toggle: boolean) => !toggle);
  }, []);

  return (
    <nav className="flex-center justify-end sm:hidden flex-1">
      <button
        onClick={onClickSearch}
        className="hover:rounded-full hover:bg-border-01"
      >
        <CiSearch className="cursor-pointer size-10 p-2" />
      </button>

      <FaMicrophone className="hidden min-[500px]:block shrink-0 size-10 p-3 cursor-pointer hover:rounded-full hover:bg-border-01" />
    </nav>
  );
}

export default SmHeader;
