import Common from "@components/Common";
import VideoList from "./components/home/VideoList";
import MenuBar from "./components/home/MenuBar";

function Home() {
  return (
    <section>
      <MenuBar />
      <VideoList />
      <br />
      <Common />
    </section>
  );
}

export default Home;
