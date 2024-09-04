import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getHome } from ".";

function useHome(params: any) {
  const { data: homeData } = useQuery({
    queryKey: [queryKey.home],
    queryFn: () => getHome(params),
    retry: 0,
  });

  return { homeData };
}

export default { useHome };
