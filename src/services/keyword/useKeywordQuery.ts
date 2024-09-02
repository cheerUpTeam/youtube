import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getKeyword } from ".";

function useKeyword(params: any) {
  const { data: keywordData } = useQuery({
    queryKey: [queryKey.keyword],
    queryFn: () => getKeyword(params),
    retry: 0,
  });
  return { keywordData };
}
export default { useKeyword };
