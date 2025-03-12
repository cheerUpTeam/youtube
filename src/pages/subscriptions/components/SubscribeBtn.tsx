import { useEffect, useState } from "react";
import { useAuthStore } from "../../../store/authStore";

interface SubscribeBtnProps {
  channelTitle: string;
  channelId: string;
}

export function SubscribeBtn({ channelTitle, channelId }: SubscribeBtnProps) {
  const { userId } = useAuthStore();

  const [isSubscribe, setIsSubscribe] = useState(false);
  const toggleSubscribe = () => {
    if (!userId) return alert("로그인 후 이용해주세요.");

    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!userData[userId]) {
      userData[userId] = { subscribedChannels: {} };
    }
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
    <button
      className="bg-font-01 !text-basic-01 text-sm rounded-3xl py-1 px-4 "
      onClick={toggleSubscribe}
    >
      {isSubscribe ? "구독중" : "구독"}
    </button>
  );
}
