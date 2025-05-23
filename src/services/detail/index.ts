import { Instance } from "../Instance";
import { DetailDataType } from "./type";

const PATH =
  import.meta.env.VITE_IS_PROD === "true"
    ? "youtube/v3/videos"
    : "popular.json";

export async function getDetail(params: any): Promise<DetailDataType> {
  return Instance.get(PATH, { params }).then((data) => data.data);
}
