import { AxiosPromise } from "axios";
import { Instance } from "../Instance";
import { GetHome } from "./type";

const PATH = "/home";

export function getHome(params: GetHome): AxiosPromise<string> {
  return Instance.get(PATH, { params });
}
