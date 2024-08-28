import compactNumber from "@lib/numberFormat";
import useDetailQuery from "@services/detail/useDetailQuery";
import {
  PiBookmarkSimpleLight,
  PiDotsThree,
  PiShareFatLight,
  PiThumbsDown,
  PiThumbsUp,
} from "react-icons/pi";
import { Link, useParams } from "react-router-dom";

interface DetailProps {}

const buttonList = [
  { title: "공유", icon: <PiShareFatLight className="mr-2" /> },
  { title: "저장", icon: <PiBookmarkSimpleLight className="mr-2" /> },
  { title: "", icon: <PiDotsThree className="" /> },
];

function Detail({}: DetailProps) {
  const { id } = useParams();
  const { detailData } = useDetailQuery.useDetail(id!);

  if (!detailData) return;
  const { snippet, statistics } = detailData;

  return (
    <section className="w-full">
      <iframe
        className="w-full aspect-video"
        id="player"
        src={`http://www.youtube.com/embed/${id}`}
      />

      <div className="[&_*]:flex">
        <h1 className="text-xl font-extrabold my-3">{snippet.title}</h1>

        <div className="flex-col sm:flex-row">
          <div className="items-center mr-3 [&_*]:items-center">
            <img
              src="#"
              alt="channelImg"
              className="self-center h-4 w-4 rounded-full mr-2"
            />
            <Link to="#">{snippet.channelTitle}</Link>
            <button className="bg-gray-100 rounded-3xl h-9 px-4 ml-4">
              구독
            </button>
          </div>

          <div className="my-3 gap-3 [&_*]:items-center [&>*]:bg-gray-100 [&>*]:rounded-3xl [&_*]:h-9 [&>*]:break-keep">
            <span>
              <button>
                <PiThumbsUp className="mr-2" />
                {`${compactNumber(parseInt(statistics.likeCount!, 10))}`}
              </button>
              <button>
                <PiThumbsDown />
              </button>
            </span>

            {buttonList.map(({ title, icon }) => (
              <button key={title}>
                {icon}
                {title}
              </button>
            ))}
          </div>
        </div>

        <dl className="flex flex-col gap-5 bg-gray-100 rounded-2xl p-2">
          <dt className="block font-bold">{`조회수${compactNumber(
            parseInt(statistics.viewCount)
          )}회  
           `}</dt>
          <dd className="whitespace-pre-line">{snippet.description}</dd>
        </dl>
      </div>
    </section>
  );
}

export default Detail;
