import useDetailQuery from "@services/detail/useDetailQuery";
import { Link, useParams } from "react-router-dom";
import {
  PiThumbsUp,
  PiThumbsDown,
  PiShareFatLight,
  PiDotsThree,
} from "react-icons/pi";
import numberFormat from "@hooks/numberFormat";
import { format } from "timeago.js";

interface DetailProps {}

function Detail({}: DetailProps) {
  const { id } = useParams();
  const { detailData } = useDetailQuery.useDetail(id!);

  if (!detailData) return;
  const { snippet, statistics } = detailData;
  return (
    <article>
      <iframe id="player" src={`http://www.youtube.com/embed/${id}`}></iframe>

      <div className="[&_*]:flex [&_*]:items-center ">
        <h2>{snippet.title}</h2>

        <div className=" flex flex-col sm:flex-row">
          <div>
            <img src="#" alt="channelImg" className="h-4 w-4 rounded-full" />
            <Link to="#">{snippet.channelTitle}</Link>
            <p>구독</p>
          </div>

          <nav className="[&>*]:bg-gray-100 [&>*]:rounded-3xl [&_*]:h-9">
            <button>
              <PiThumbsUp />
              {`${numberFormat({
                num: parseInt(statistics.likeCount!),
              })}`}
            </button>
            <button>
              <PiThumbsDown />
            </button>
            <button>
              <PiShareFatLight />
            </button>
            <button>
              <PiDotsThree />
            </button>
          </nav>
        </div>

        <p className="bg-gray-100 rounded-2xl">
          {`${numberFormat({ num: parseInt(statistics.viewCount) })}`}{" "}
          {`${format(snippet.publishedAt)}`}
          <br />
          {snippet.description}
        </p>
      </div>
    </article>
  );
}

export default Detail;
