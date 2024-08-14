import useHomeQuery from "@services/home/useHomeQuery";

interface VideoListProps {}

function VideoList({}: VideoListProps) {
  const { homeData } = useHomeQuery.useHome();

  return (
    <section>
      <ul className="flex items-center flex-col  md:">
        {homeData?.items?.map(({ snippet }, idx) => (
          <li key={idx}>
            <img
              src={snippet.thumbnails.medium.url}
              alt={snippet.channelTitle}
            />

            <div>
              <h2>{snippet.localized.title}</h2>
              <p>{snippet.channelTitle}</p>
              <p>{snippet.publishedAt}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
