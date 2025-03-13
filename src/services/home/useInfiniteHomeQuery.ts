import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getHome } from ".";

function useInfiniteHome(params: any) {
  const {
    data: homeData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [queryKey.home],
    queryFn: async ({ pageParam }) => {
      const query = {
        ...params,
        pageToken: pageParam,
      };
      return getHome(query);
    },
    retry: 0,
    initialPageParam: "",
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken || undefined;
    },
  });

  return { homeData, fetchNextPage, isFetchingNextPage };
}

export default { useInfiniteHome };
