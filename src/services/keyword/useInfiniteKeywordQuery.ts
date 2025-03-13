import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getKeyword } from ".";

function useInfiniteKeyword(params: any) {
  const {
    data: keywordData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [queryKey.keyword, params.q],
    queryFn: ({ pageParam }) => getKeyword({ ...params, pageToken: pageParam }),
    retry: 0,
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
  return { keywordData, fetchNextPage, isFetchingNextPage };
}
export default { useInfiniteKeyword };
