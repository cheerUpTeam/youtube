import { Instance } from "@services/Instance";
import { keywordDataType } from "./type";

const PATH =
  import.meta.env.VITE_IS_PROD === "true"
    ? "/youtube/v3/search"
    : "popular.json";

export function getKeyword(params: any): Promise<keywordDataType> {
  return Instance.get(PATH, { params }).then((data) => data.data);
}
