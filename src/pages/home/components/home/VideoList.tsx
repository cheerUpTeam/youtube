import { locale } from "@lib/locale";
import compactNumber from "@lib/numberFormat";
import useHomeQuery from "@services/home/useHomeQuery";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../../../../store/filterStore";

interface VideoListProps {}

function VideoList({}: VideoListProps) {
  const { homeData } = useHomeQuery.useHome();
  const { filter } = useFilterStore();

  const navigate = useNavigate();

  const filterData = {
    ...homeData,
    items:
      filter !== "0"
        ? homeData?.items.filter(({ snippet }) => snippet.categoryId === filter)
        : homeData?.items,
  };

  return (
    <section>
      <ul className="grid gap-4 justify-center min-[700px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filterData?.items?.map(({ snippet, statistics, id }, idx) => (
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
                <p>{`조회수 ${compactNumber(
                  parseInt(statistics.viewCount, 10)
                )}회 • ${locale(snippet.publishedAt)}
              
                `}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
