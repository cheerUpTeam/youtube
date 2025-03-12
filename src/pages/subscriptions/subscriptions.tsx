import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { SubscribeBtn } from "./components/SubscribeBtn";
interface SubscriptionsProps {
  channelTitle: string;
  channelId: string;
}
export function Subscriptions() {
  const { userId } = useAuthStore();
  const [subscriptions, setSubscriptions] = useState<SubscriptionsProps[]>([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    const subscribedChannels = userData[userId].subscribedChannels || {};
    setSubscriptions(Object.values(subscribedChannels));
  }, [userId]);

  if (!userId)
    return (
      <div className="flex w-full justify-center h-screen">
        로그인 후 이용해주세요.
      </div>
    );
  if (subscriptions.length === 0)
    return (
      <div className="flex w-full justify-center h-screen">
        구독 채널이 없습니다.
      </div>
    );
  return (
    <div className="w-full common-padding">
      <div className="grid grid-cols-4 gap-4">
        {subscriptions.map((channel, index) => (
          <div key={index} className="flex-col flex-center gap-2 text-sm">
            <div className="rounded-full size-20 flex-center bg-stone-500 ">
              {channel.channelTitle.slice(0, 1)}
            </div>
            {channel.channelTitle}
            <SubscribeBtn
              channelTitle={channel.channelTitle}
              channelId={channel.channelId}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
