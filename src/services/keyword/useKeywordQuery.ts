import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getKeyword } from ".";

function useKeyword(params: any) {
  const { data: keywordData } = useQuery({
    queryKey: [queryKey.keyword, params.q],
    queryFn: () => getKeyword(params),
    retry: 0,
  });
  return { keywordData };
}
export default { useKeyword };
