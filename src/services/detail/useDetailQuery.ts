import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getDetail } from ".";
import { DetailDataType, DetailItemDataType } from "./type";

function useDetail(params: any) {
  const { data: detailData } = useQuery({
    queryKey: [queryKey.detail],
    queryFn: () => getDetail(params),
    enabled: !!params,
    select: (data) => {
      // if (import.meta.env.VITE_IS_PROD === "true") {
      //   const items = (data as DetailDataType).items[0];

      //   return {
      //     snippet: items.snippet,
      //     statistics: items.statistics,
      //   };
      // }

      // const items = data as DetailItemDataType;
      // return {
      //   snippet: items.snippet,
      //   statistics: items.statistics,
      // };
      const items =
        import.meta.env.VITE_IS_PROD === "true"
          ? (data as DetailDataType).items[0]
          : (data as DetailItemDataType);

      return {
        snippet: items.snippet,
        statistics: items.statistics,
      };
    },
  });

  return { detailData };
}

export default { useDetail };
