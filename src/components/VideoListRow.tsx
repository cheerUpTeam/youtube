import { locale } from "@lib/locale";
import { keywordParams } from "@lib/params";
import useInfiniteKeywordQuery from "@services/keyword/useInfiniteKeywordQuery";
import { useEffect } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

interface VideoListRowProps {
  className1: string;
  className2: string;
  title?: string;
}

function VideoListRow({ className1, className2, title }: VideoListRowProps) {
  const { keyword } = useParams();
  const searchQuery = title || keyword;
  const { keywordData, fetchNextPage, isFetchingNextPage } =
    useInfiniteKeywordQuery.useInfiniteKeyword({
      ...keywordParams,
      q: searchQuery,
    });

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (!keywordData) return <p>검색결과가 없습니다.</p>;

  return (
    <section className="mt-6 ">
      {keywordData?.pages.flatMap((pages) =>
        pages.items?.length > 0 ? (
          <ul className="mx-5">
            {pages.items?.map(({ snippet, id, kind }: any, idx: number) => (
              <Link
                to={kind === "youtube#channel" ? "#" : `/watch/${id}`}
                ref={idx === pages.items.length - 1 ? ref : null}
                className="my-3 cursor-pointer flex gap-2"
                key={idx}
              >
                <img
                  className={`${className1} w-1/2  aspect-video object-cover rounded-lg`}
                  src={snippet.thumbnails.high.url}
                  alt={snippet.channelTitle}
                />

                <figcaption
                  className={`${className2} w-1/2 flex flex-col text-gray-600`}
                >
                  <h2 className="font-semibold text-black line-clamp-2 mb-1">
                    <Markdown>{snippet.title}</Markdown>
                  </h2>
                  <p>
                    {snippet.channelTitle} <br />
                    {locale(snippet.publishedAt)}
                  </p>
                  {!title && (
                    <p className="whitespace-pre-line line-clamp-1 pt-4">
                      {snippet.description}
                    </p>
                  )}
                </figcaption>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 justify-self-center">
            검색 결과가 없습니다.
          </p>
        )
      )}
      {isFetchingNextPage && (
        <IoReloadOutline className="mt-4 justify-self-center animate-spin  rounded-full size-10" />
      )}
    </section>
  );
}

export default VideoListRow;
