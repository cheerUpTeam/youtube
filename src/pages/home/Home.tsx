import { Link } from "react-router-dom";
import Test from "./components/Test";
import Common from "@components/Common";

function Home() {
  return (
    <div className="text-white w-screen">
      main 페이지입니다.
      <Link to="detail">디테일 페이지로 이동</Link>
      <Test />
      <br />
      <Common />
    </div>
  );
}

export default Home;
