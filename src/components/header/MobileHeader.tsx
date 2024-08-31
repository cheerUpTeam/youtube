import { Dispatch, SetStateAction, useCallback } from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { FaMicrophone as MicIcon } from "react-icons/fa";

interface MobileHeaderProps {
  setSearchToggle: Dispatch<SetStateAction<boolean>>;
}
function MobileHeader({ setSearchToggle }: MobileHeaderProps) {
  const onClickSearch = useCallback(() => {
    setSearchToggle((toggle: boolean) => !toggle);
  }, [setSearchToggle]);

  return (
    <nav className="flex-center justify-end sm:hidden flex-1">
      <button
        onClick={onClickSearch}
        className="hover:rounded-full hover:bg-border-01"
      >
        <SearchIcon className="cursor-pointer size-10 p-2" />
      </button>

      <MicIcon className="hidden min-[500px]:block shrink-0 size-10 p-3 cursor-pointer hover:rounded-full hover:bg-border-01" />
    </nav>
  );
}

export default MobileHeader;
