import VideoListRow from "@components/VideoListRow";

export default function Results() {
  return (
    <section>
      <VideoListRow
        className1="col-span-5 "
        className2="col-span-5 text-lg [&_p]:text-sm"
      />
    </section>
  );
}
