import { Instance } from "../Instance";
import { PopularDataType } from "./type";

const PATH = "popular.json";

export function getHome(): Promise<PopularDataType> {
  return Instance.get(PATH).then((data) => data.data);
}
