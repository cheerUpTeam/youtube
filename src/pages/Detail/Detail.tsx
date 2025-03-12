import VideoListRow from "@components/VideoListRow";
import compactNumber from "@lib/numberFormat";
import { detailParams } from "@lib/params";
import useDetailQuery from "@services/detail/useDetailQuery";
import { useParams } from "react-router-dom";
import { LikeMenu } from "./components/LikeMenu";
import { ShareMenu } from "./components/ShareMenu";
import { SubscribeMenu } from "./components/SubscribeMenu";

function Detail() {
  const { id } = useParams();
  const { detailData } = useDetailQuery.useDetail({ ...detailParams, id: id });

  if (!detailData) return;
  const { snippet, statistics } = detailData;
  console.log(snippet);
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

          <div className="flex-col gap-3  sm:flex-row">
            <SubscribeMenu
              channelTitle={snippet.channelTitle}
              channelId={snippet.channelId}
            />
            <div className="my-3 gap-3 [&_*]:items-center [&_button]:bg-basic-02 [&_*]:h-9 [&>*]:break-keep">
              <LikeMenu snippet={snippet} statistics={statistics} />
              <ShareMenu />
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
