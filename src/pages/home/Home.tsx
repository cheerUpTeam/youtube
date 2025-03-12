import { Toaster } from "sonner";
import MenuBar from "./components/home/MenuBar";
import VideoList from "./components/home/VideoList";

function Home() {
  return (
    <div>
      <MenuBar />
      <VideoList />
      <Toaster />
    </div>
  );
}

export default Home;
