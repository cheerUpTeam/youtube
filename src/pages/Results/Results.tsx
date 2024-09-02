import VideoListRow from "@components/VideoListRow";
import { useParams } from "react-router-dom";

export default function Results() {
  const { keyword } = useParams();
  return (
    <section>
      {keyword}
      <VideoListRow
        className1="col-span-5 "
        className2="col-span-5 text-lg [&_p]:text-sm"
      />
    </section>
  );
}
