import useDetailQuery from "@services/detail/useDetailQuery";
import { Link, useParams } from "react-router-dom";
import {
  PiThumbsUp,
  PiThumbsDown,
  PiShareFatLight,
  PiDotsThree,
  PiBookmarkSimpleLight,
} from "react-icons/pi";
import numberFormat from "@hooks/numberFormat";
import { format } from "timeago.js";
import compactNumber from "@lib/numberFormat";
import { formatTimeAgo } from "@lib/timeago";

interface DetailProps {}

function Detail({}: DetailProps) {
  const { id } = useParams();
  const { detailData } = useDetailQuery.useDetail(id!);

  if (!detailData) return;
  const { snippet, statistics } = detailData;
  return (
    <article>
      <iframe
        className="w-full aspect-video"
        id="player"
        src={`http://www.youtube.com/embed/${id}`}
      ></iframe>

      <div className="[&_*]:flex">
        <h2 className="text-xl font-extrabold my-3">{snippet.title}</h2>

        <div className="flex-col sm:flex-row">
          <div className="[&_*]:items-center">
            <img
              src="#"
              alt="channelImg"
              className="self-center h-4 w-4 rounded-full mr-2"
            />
            <Link to="#">{snippet.channelTitle}</Link>
            <p className="bg-gray-100 rounded-3xl h-9 px-4 ml-4">구독</p>
          </div>

          <nav className="my-3 gap-3 [&_*]:items-center [&>*]:bg-gray-100 [&>*]:rounded-3xl [&_*]:h-9 [&>*]:break-keep">
            <div>
              <button>
                <PiThumbsUp className="mr-2" />
                {`${compactNumber(parseInt(statistics.likeCount!, 10))}`}
              </button>
              <button>
                <PiThumbsDown />
              </button>
            </div>

            <button>
              <PiShareFatLight className="mr-2" />
              공유
            </button>
            <button>
              <PiBookmarkSimpleLight className="mr-2" />
              저장
            </button>
            <button>
              <PiDotsThree />
            </button>
          </nav>
        </div>

        <p className="bg-gray-100 rounded-2xl p-2">
          {`조회수${compactNumber(parseInt(statistics.viewCount))}회  
           `}
          <br />
          {snippet.description}
        </p>
      </div>
    </article>
  );
}

export default Detail;
