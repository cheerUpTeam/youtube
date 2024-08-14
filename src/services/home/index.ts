import { AxiosPromise } from "axios";
import { Instance } from "../Instance";
import popularData from "@datas/popular.json";

const PATH = "popular.json";

type PopularDataType = typeof popularData;

export function getHome(): Promise<PopularDataType> {
  return Instance.get(PATH).then((data) => data.data);
}
