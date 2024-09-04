import numberFormat from "@hooks/numberFormat";
import { locale } from "@lib/locale";
import { keywordParams } from "@lib/params";
import useKeywordQuery from "@services/keyword/useKeywordQuery";
import { useNavigate, useParams } from "react-router-dom";

interface VideoListRowProps {
  className1: string;
  className2: string;
  title?: string;
}

function VideoListRow({ className1, className2, title }: VideoListRowProps) {
  const navigate = useNavigate();

  const { keyword } = useParams();
  const searchQuery = title || keyword;
  const { keywordData } = useKeywordQuery.useKeyword({
    ...keywordParams,
    q: searchQuery,
  });

  if (!keywordData) return <p>검색결과가 없습니다.</p>;
  console.log(keywordData);
  return (
    <section className="">
      {keywordData?.items?.length > 0 ? (
        <ul className="mx-5">
          {keywordData?.items?.map(({ snippet, id }: any, idx: number) => (
            <li
              className="my-3 cursor-pointer"
              onClick={() => {
                navigate(`/watch/${id.videoId}`);
              }}
              key={idx}
            >
              <figure className="grid grid-cols-10 gap-2">
                <img
                  className={`${className1} w-full rounded-lg`}
                  src={snippet.thumbnails.medium.url}
                  alt={snippet.channelTitle}
                />

                <figcaption
                  className={`${className2} flex flex-col text-gray-600`}
                >
                  <h2 className="font-semibold text-black line-clamp-2 mb-1">
                    {snippet.title}
                  </h2>
                  <p>{snippet.channelTitle}</p>
                  <p>{` ${locale(snippet.publishedAt)}
              
                `}</p>
                  {!title && (
                    <p className="whitespace-pre-line line-clamp-1 pt-4">
                      {snippet.description}
                    </p>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 m-10">데이터가 없음</p>
      )}
    </section>
  );
}

export default VideoListRow;
