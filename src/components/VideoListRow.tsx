import { useNavigate, useParams } from "react-router-dom";
import { useFilterStore } from "../store/filterStore";
import useHomeQuery from "@services/home/useHomeQuery";
import compactNumber from "@lib/numberFormat";
import { locale } from "@lib/locale";
import { categoryParams } from "@lib/params";

interface VideoListRowProps {
  className1: string;
  className2: string;
}

function VideoListRow({ className1, className2 }: VideoListRowProps) {
  const { keyword: q } = useParams();
  const { homeData } = useHomeQuery.useHome({ ...categoryParams, q });
  const { filter } = useFilterStore();

  const navigate = useNavigate();

  const filterData: any = {
    ...homeData,
    items:
      filter !== "0"
        ? homeData?.items.filter(({ snippet }) => snippet.categoryId === filter)
        : homeData?.items,
  };
  return (
    <section className="">
      {filterData?.items?.length > 0 ? (
        <ul className="mx-5">
          {filterData?.items?.map(
            ({ snippet, statistics, id }: any, idx: number) => (
              <li
                onClick={() => {
                  navigate(`watch/${id}`);
                }}
                className="my-3 cursor-pointer"
                key={idx}
              >
                <figure className="grid grid-cols-10 gap-2">
                  <img
                    className={`${className1} w-full rounded-lg`}
                    src={snippet.thumbnails.maxres.url}
                    alt={snippet.channelTitle}
                  />

                  <figcaption
                    className={`${className2} flex flex-col text-gray-600`}
                  >
                    <h2 className="font-semibold text-black line-clamp-2 mb-1">
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
            )
          )}
        </ul>
      ) : (
        <p className="text-center text-gray-500 m-10">데이터가 없음</p>
      )}
    </section>
  );
}

export default VideoListRow;
