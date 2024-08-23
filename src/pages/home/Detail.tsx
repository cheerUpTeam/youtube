import { Link, useParams } from "react-router-dom";

interface DetailProps {
  title: string;
}

function Detail({}: DetailProps) {
  const { title, detail } = useParams();
  return (
    <div>
      {detail} 페이지입니다. <Link to="/">메인페이지로 이동</Link>
      {title}
    </div>
  );
}

export default Detail;
