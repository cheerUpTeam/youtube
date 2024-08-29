import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getDetail } from ".";

function useDetail(id: string) {
  const { data: detailData } = useQuery({
    queryKey: [queryKey.detail],
    queryFn: () => getDetail(id),
    enabled: !!id,
    select: (data) => {
      return {
        snippet: data.snippet,
        statistics: data.statistics,
      };
    },
  });

  return { detailData };
}

export default { useDetail };
