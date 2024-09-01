import { Instance } from "../Instance";
import { CategoryDataType } from "./type";

const PATH =
  import.meta.env.VITE_IS_PROD === "true"
    ? "/youtube/v3/videoCategories"
    : "categories.json";

export function getCategory(params: any): Promise<CategoryDataType> {
  return Instance.get(PATH, { params }).then((data) => data.data);
}
