import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getHome } from ".";

function useHome() {
  const { data: homeData } = useQuery({
    queryKey: [queryKey.home],
    queryFn: getHome,
  });

  return { homeData };
}

export default { useHome };
