import Common from "@components/Common";
import { Link } from "react-router-dom";
import VideoList from "./components/home/VideoList";

function Home() {
  return (
    <section>
      main! 페이지입니다.
      <Link to="detail">디테일 페이지로 이동</Link>
      <VideoList />
      <br />
      <Common />
    </section>
  );
}

export default Home;
