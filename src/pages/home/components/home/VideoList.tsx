import numberFormat from "@hooks/numberFormat";
import useHomeQuery from "@services/home/useHomeQuery";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";

interface VideoListProps {}

function VideoList({}: VideoListProps) {
  const { homeData } = useHomeQuery.useHome();

  const navigate = useNavigate();

  return (
    <section>
      <ul className="grid gap-4 justify-center min-[700px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {homeData?.items?.map(({ snippet, statistics, id }, idx) => (
          <li
            onClick={() => {
              navigate(`watch/${id}`);
            }}
            className="max-w-[500px] my-6 min-[700px]:w-full cursor-pointer"
            key={idx}
          >
            <figure>
              <img
                className="w-full rounded-2xl"
                src={snippet.thumbnails.maxres.url}
                alt={snippet.channelTitle}
              />

              <figcaption className="text-sm  text-gray-600">
                <h2 className="text-base font-semibold text-black line-clamp-2 mb-1">
                  {snippet.localized.title}
                </h2>
                <p>{snippet.channelTitle}</p>
                <p>{`${numberFormat({
                  num: parseInt(statistics.viewCount, 10),
                })} views • ${format(snippet.publishedAt)}`}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
