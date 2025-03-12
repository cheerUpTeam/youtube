import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getDetail } from ".";
import { DetailDataType } from "./type";
import { useParams } from "react-router-dom";

function useDetail(params: any) {
  const { id } = useParams();
  const { data: detailData } = useQuery({
    queryKey: [queryKey.detail],
    queryFn: () => getDetail(params),
    enabled: !!params,
    select: (data) => {
      if (import.meta.env.VITE_IS_PROD === "true") {
        const items = (data as DetailDataType).items[0];
        return {
          snippet: items.snippet,
          statistics: items.statistics,
        };
      } else {
        const items = (data as DetailDataType).items.find(
          (item) => item.id === id
        );
        if (!items) return;
        return {
          snippet: items.snippet,
          statistics: items.statistics,
        };
      }
    },
  });

  return { detailData };
}

export default { useDetail };
