import useHomeQuery from "@services/home/useHomeQuery";

interface VideoListProps {}

function VideoList({}: VideoListProps) {
  const { homeData } = useHomeQuery.useHome();
  console.log(homeData);

  return (
    <section>
      {/* {homeData?.items?.map((data) => (
        <div>{data.id}</div>
      ))} */}
    </section>
  );
}

export default VideoList;
