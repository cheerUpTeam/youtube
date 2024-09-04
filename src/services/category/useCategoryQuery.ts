import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getCategory } from ".";

function useCategory(params: any) {
  const { data: categoryData } = useQuery({
    queryKey: [queryKey.category],
    queryFn: () => getCategory(params),
    retry: 0,
  });

  return { categoryData };
}

export default { useCategory };
