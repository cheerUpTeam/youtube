import { useParams } from "react-router-dom";

export default function Results() {
  const { keyword } = useParams();
  return <section>{keyword}</section>;
}
