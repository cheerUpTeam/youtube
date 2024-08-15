import { Instance } from "../Instance";
import CategoriesData from "@datas/Categories.json";

const PATH = "categories.json";

type CategoriesDataType = typeof CategoriesData;

export function getMenu(): Promise<CategoriesDataType> {
  return Instance.get(PATH).then((data) => data.data);
}
