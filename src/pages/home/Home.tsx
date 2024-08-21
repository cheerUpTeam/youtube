import Common from "@components/Common";
import VideoList from "./components/home/VideoList";
import MenuBar from "./components/home/MenuBar";
import SideMenu from "./components/home/SideMenu";

function Home() {
  return (
    <section className="flex ">
      <SideMenu />
      <section className="block md:pl-16">
        <MenuBar />
        <VideoList />
        <br />
        <Common />
      </section>
    </section>
  );
}

export default Home;
