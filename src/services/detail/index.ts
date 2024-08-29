import { Instance } from "../Instance";
import { PopularItemDataType, PopularItemsDataType } from "./type";

const PATH = "popular.json";

export function getDetail(detailId: string): Promise<PopularItemDataType> {
  return Instance.get(PATH).then((data) => {
    const items = data.data.items as PopularItemsDataType;
    const result = items.find(
      ({ id }) => detailId === id
    ) as PopularItemDataType;
    return result;
  });
}
