import { Link } from "react-router-dom";
import Test from "./components/home/Test";

interface DetailProps {
  title: string;
}

function Detail({ title }: DetailProps) {
  return (
    <div>
      {title} 페이지입니다. <Link to="/">메인페이지로 이동</Link>
      <Test />
    </div>
  );
}

export default Detail;
