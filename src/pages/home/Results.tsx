import { useParams } from "react-router-dom";

export default function Results() {
  const { keyword } = useParams();
  return <div>{keyword}</div>;
}
