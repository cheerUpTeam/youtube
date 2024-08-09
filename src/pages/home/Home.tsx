import Common from "@components/Common";
import { Link } from "react-router-dom";
import Test from "./components/home/Test";

function Home() {
  // const { homeData } = useHomeQuery.useHome();

  return (
    <section>
      main! 페이지입니다.
      <Link to="detail">디테일 페이지로 이동</Link>
      <Test />
      <br />
      <Common />
    </section>
  );
}

export default Home;
