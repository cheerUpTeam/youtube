import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useEffect, useState } from "react";

interface LikedVideo {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      standard: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

export function Liked() {
  const { userId } = useAuthStore();
  const [likedVideos, setLikedVideos] = useState<LikedVideo[]>([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const likedVideos = userData[userId].likedVideos || {};
    setLikedVideos(Object.values(likedVideos));
  }, [userId]);

  if (!userId)
    return <div className="flex-center h-screen">로그인 후 이용해주세요.</div>;
  return (
    <div className="w-full common-padding">
      <div className="h-36 flex-center bg-gradient-to-b from-[#C7926F] via-[#DAD3A2] to-basic-01">
        play all
      </div>
      <div className="space-y-4">
        {likedVideos.map((video, index) => (
          <Link
            to={`/watch/${video.id}`}
            key={video.id}
            className="flex gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer overflow-hidden"
          >
            <p className="text-center flex items-center">{index + 1}</p>
            <div className="shrink-0 w-[200px] h-[113px] bg-gray-100 rounded-lg">
              <img
                src={video.snippet.thumbnails.standard.url}
                alt={video.snippet.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-medium line-clamp-2 mb-1">
                {video.snippet.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {video.snippet.channelTitle} • 조회수{" "}
                {video.statistics.viewCount}회 • 좋아요{" "}
                {video.statistics.likeCount}개
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
