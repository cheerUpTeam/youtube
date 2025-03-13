import { locale } from "@lib/locale";
import compactNumber from "@lib/numberFormat";
import { homeParams } from "@lib/params";
import useInfiniteHomeQuery from "@services/home/useInfiniteHomeQuery";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../../../../store/filterStore";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IoReloadOutline } from "react-icons/io5";

function VideoList() {
  const { homeData, fetchNextPage, isFetchingNextPage } =
    useInfiniteHomeQuery.useInfiniteHome(homeParams);
  const { filter } = useFilterStore();
  const navigate = useNavigate();

  console.log(111, homeData);
  const filterData: any = {
    ...homeData,
    items:
      filter !== "0"
        ? homeData?.pages.flatMap((page) =>
            page.items.filter(({ snippet }) => snippet.categoryId === filter)
          )
        : homeData?.pages.flatMap((page) => page.items),
  };

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <section>
      {filterData?.items?.length > 0 ? (
        <ul className="grid gap-4 mx-5 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filterData?.items?.map(
            ({ snippet, statistics, id }: any, idx: number) => (
              <li
                ref={idx === filterData?.items?.length - 1 ? ref : null}
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
            )
          )}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-10">데이터가 없음</p>
      )}
      {isFetchingNextPage && (
        <IoReloadOutline className="mt-4 justify-self-center animate-spin  rounded-full size-10" />
      )}
    </section>
  );
}

export default VideoList;
