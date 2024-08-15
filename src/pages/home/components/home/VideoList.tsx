import numberFormat from "@hooks/numberFormat";
import useHomeQuery from "@services/home/useHomeQuery";
import { format } from "timeago.js";

interface VideoListProps {}

function VideoList({}: VideoListProps) {
  const { homeData } = useHomeQuery.useHome();

  return (
    <section>
      <ul className="flex items-center flex-col ">
        {homeData?.items?.map(({ snippet, statistics }, idx) => (
          <li className="w-full my-6" key={idx}>
            <img
              className="w-full rounded-2xl"
              src={snippet.thumbnails.medium.url}
              alt={snippet.channelTitle}
            />

            <div className="text-sm  text-gray-600">
              <h2 className="text-base font-semibold text-black line-clamp-2 mb-1">
                {snippet.localized.title}
              </h2>
              <p>{snippet.channelTitle}</p>
              <p>{`${numberFormat({
                num: parseInt(statistics.viewCount, 10),
              })} views • ${format(snippet.publishedAt)}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
