import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getHome } from "../api/home";

function useHome() {
  const { data: homeData } = useQuery({
    queryKey: [queryKey.home],
    queryFn: () => getHome({ id: 1 }),
  });

  return { homeData };
}

export default { useHome };
