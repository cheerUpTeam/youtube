import VideoListRow from "@components/VideoListRow";
import compactNumber from "@lib/numberFormat";
import { detailParams } from "@lib/params";
import useDetailQuery from "@services/detail/useDetailQuery";
import {
  PiBookmarkSimpleLight,
  PiDotsThree,
  PiShareFatLight,
} from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { LIkeMenu } from "./components/LikeMenu";

const buttonList = [
  { title: "공유", icon: <PiShareFatLight className="mr-2" /> },
  { title: "저장", icon: <PiBookmarkSimpleLight className="mr-2" /> },
  { title: "", icon: <PiDotsThree className="" /> },
];

function Detail() {
  const { id } = useParams();
  const { detailData } = useDetailQuery.useDetail({ ...detailParams, id: id });

  if (!detailData) return;
  const { snippet, statistics } = detailData;

  return (
    <section className="w-full grid lg:grid-cols-5">
      <article className="mx-5 col-span-3">
        <iframe
          className="w-full aspect-video my-6 rounded-2xl"
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
              <Link to="#" className="font-semibold">
                {snippet.channelTitle}
              </Link>
              <button className="bg-font-01 !text-basic-01 rounded-3xl h-9 px-4 ml-4">
                구독
              </button>
            </div>

            <div className="my-3 gap-3 [&_*]:items-center [&_button]:bg-basic-02 [&_*]:h-9 [&>*]:break-keep">
              <LIkeMenu snippet={snippet} statistics={statistics} />
              {buttonList.map(({ title, icon }) => (
                <button
                  key={title}
                  className="px-2 rounded-full hover:brightness-90"
                >
                  {icon}
                  {title}
                </button>
              ))}
            </div>
          </div>

          <dl className="flex flex-col gap-5 bg-basic-02 text-font-01 rounded-2xl p-2">
            <dt className="block font-bold">{`조회수${compactNumber(
              parseInt(statistics.viewCount)
            )}회  
           `}</dt>
            <dd className="whitespace-pre-line">{snippet.description}</dd>
          </dl>
        </div>
      </article>

      <article className="col-span-2">
        <VideoListRow
          className1="col-span-3 lg:col-span-5"
          className2="col-span-7 lg:col-span-5 text-xs"
          title={snippet.title}
        />
      </article>
    </section>
  );
}

export default Detail;
