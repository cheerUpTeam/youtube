import { useQuery } from "@tanstack/react-query";
import { queryKey } from "@utils/const/queryKey";
import { getMenu } from ".";

function useMenu() {
  const { data: menuData } = useQuery({
    queryKey: [queryKey.menu],
    queryFn: getMenu,
  });

  return { menuData };
}

export default { useMenu };
