import {
  PiThumbsUp,
  PiThumbsUpFill,
  PiThumbsDown,
  PiThumbsDownFill,
} from "react-icons/pi";
import compactNumber from "@lib/numberFormat";
import { useAuthStore } from "../../../store/authStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface LIkeMenuProps {
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  statistics: {
    likeCount?: string;
    viewCount?: string;
    favoriteCount?: string;
    commentCount?: string;
  };
}

export function LikeMenu({ snippet, statistics }: LIkeMenuProps) {
  const { id } = useParams();

  const { userId } = useAuthStore();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const toggleLike = () => {
    if (!userId) return alert("로그인 후 이용해주세요.");

    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!userData[userId]) {
      userData[userId] = { likedVideos: {} };
    }
    const likedVideos = userData[userId].likedVideos || {};

    if (!id) return;
    if (id in likedVideos) {
      delete likedVideos[id];
      setIsLiked(false);
    } else {
      likedVideos[id] = {
        id,
        snippet,
        statistics,
        likedAt: new Date().toISOString(),
      };
      setIsLiked(true);
      setIsDisliked(false);
    }

    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...userData,
        [userId]: {
          ...userData[userId],
          likedVideos,
        },
      })
    );

    setIsLiked(!isLiked);
  };

  const toggleDislike = () => {
    if (!userId) return alert("로그인 후 이용해주세요.");

    setIsDisliked(!isDisliked);
    if (isLiked) {
      setIsLiked(false);
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");

      if (!userData[userId]) {
        userData[userId] = { likedVideos: {} };
      }
      const likedVideos = userData[userId].likedVideos || {};
      if (!id) return;
      if (id in likedVideos) {
        delete likedVideos[id];
        localStorage.setItem(
          "userData",
          JSON.stringify({
            ...userData,
            [userId]: {
              ...userData[userId],
              likedVideos,
            },
          })
        );
      }
    }
  };

  useEffect(() => {
    if (!id || !userId) return;
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const likedVideos = userData[userId]?.likedVideos || {};
    if (id in likedVideos) {
      setIsLiked(true);
    }
  }, [id, userId]);

  return (
    <div>
      <button
        onClick={toggleLike}
        className="cursor-pointer  px-4 rounded-l-full hover:brightness-90"
      >
        {isLiked ? (
          <PiThumbsUpFill className="mr-2 " />
        ) : (
          <PiThumbsUp className="mr-2" />
        )}
        {`${compactNumber(parseInt(statistics.likeCount!, 10))}`}
      </button>
      <button
        onClick={toggleDislike}
        className="border-l border-border-01 px-4 rounded-r-full hover:brightness-90"
      >
        {isDisliked ? (
          <PiThumbsDownFill className="mr-2" />
        ) : (
          <PiThumbsDown className="mr-2" />
        )}
      </button>
    </div>
  );
}
