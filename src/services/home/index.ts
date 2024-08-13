import { Instance } from "../Instance";

const PATH = "korea.json";

export function getHome() {
  return Instance.get(PATH).then((data) => data.data);
}
