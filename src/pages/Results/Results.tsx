import VideoListRow from "@components/VideoListRow";
import MenuBar from "@pages/home/components/home/MenuBar";

export default function Results() {
  return (
    <section>
      <MenuBar />
      <VideoListRow
        className1="col-span-5 "
        className2="col-span-5 text-lg [&_p]:text-sm"
      />
    </section>
  );
}
