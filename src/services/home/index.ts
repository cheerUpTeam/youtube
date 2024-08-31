import { Instance } from "../Instance";
import { PopularDataType } from "./type";

const PATH =
  import.meta.env.VITE_IS_PROD === "true"
    ? "/youtube/v3/videos"
    : "popular.json";

export function getHome(params: any): Promise<PopularDataType> {
  return Instance.get(PATH, { params }).then((data) => data.data);
}
