import { useEffect, useState } from "react";
import { useAuthStore } from "../../../store/authStore";

interface SubscribeMenuProps {
  channelTitle: string;
  channelId: string;
}
export function SubscribeMenu({ channelTitle, channelId }: SubscribeMenuProps) {
  const { userId } = useAuthStore();

  const [isSubscribe, setIsSubscribe] = useState(false);
  const toggleSubscribe = () => {
    if (!userId) return alert("로그인 후 이용해주세요.");

    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const subscribedChannels = userData[userId].subscribedChannels || {};

    if (channelId in subscribedChannels) {
      delete subscribedChannels[channelId];
      setIsSubscribe(false);
    } else {
      subscribedChannels[channelId] = { channelId, channelTitle };
      setIsSubscribe(true);
    }

    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...userData,
        [userId]: {
          ...userData[userId],
          subscribedChannels,
        },
      })
    );
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const subscribedChannels = userData[userId]?.subscribedChannels || {};
    if (channelId in subscribedChannels) {
      setIsSubscribe(true);
    }
  }, [channelId, userId]);

  return (
    <div className="flex items-center gap-3 [&_*]:items-center">
      <div className="rounded-full bg-font-01 !text-basic-01 size-9 flex-center">
        {channelTitle.slice(0, 1)}
      </div>
      <p className="font-semibold">{channelTitle}</p>
      <button
        className="bg-font-01 !text-basic-01 rounded-3xl h-9 px-4 "
        onClick={toggleSubscribe}
      >
        {isSubscribe ? "구독중" : "구독"}
      </button>
    </div>
  );
}
