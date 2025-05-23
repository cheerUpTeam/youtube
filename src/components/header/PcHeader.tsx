import { CiSearch } from "react-icons/ci";

interface PcHeaderProps {
  setInputValue: (value: string) => void;
  hadleSubmit: (e: React.SyntheticEvent) => void;
}

function PcHeader({ setInputValue, hadleSubmit }: PcHeaderProps) {
  return (
    <nav className="hidden sm:flex-center mx-16 flex-1 gap-2 justify-center">
      <form
        onSubmit={hadleSubmit}
        className="flex-center flex-1 border border-border-01 rounded-3xl overflow-hidden max-w-[600px]"
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
      {/* <FaMicrophone className="shrink-0 size-10 p-3 cursor-pointer rounded-full bg-border-01 " /> */}
    </nav>
  );
}

export default PcHeader;
