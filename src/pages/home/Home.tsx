import { useFilterStore } from "../../store/filterStore";
import MenuBar from "./components/home/MenuBar";
import VideoList from "./components/home/VideoList";

function Home() {
  const { test, increate, filter, onClickFilter } = useFilterStore();
  console.log(filter);

  return (
    <div>
      <button
        // onClick={() => increate()}
        onClick={() => onClickFilter("Music")}
        className="w-[100px] h-[100px] bg-red-400"
      >
        여기보세요
      </button>
      <MenuBar />
      <VideoList />
    </div>
  );
}

export default Home;
