import { Instance } from "@services/Instance";
import { keywordDatasType, keywordDataType } from "./type";

const PATH =
  import.meta.env.VITE_IS_PROD === "true"
    ? "/youtube/v3/search"
    : "popular.json";

// export function getKeyword(params: any): Promise<keywordDataType> {
//   return Instance.get(PATH, { params }).then((data) => data.data);
// }

export function getKeyword(params: any): Promise<keywordDatasType> {
  return Instance.get(PATH, { params }).then((data) => {
    if (import.meta.env.VITE_IS_PROD === "true") {
      return data.data;
    } else {
      const filteredItems = data.data.items.filter((item: keywordDataType) =>
        item.snippet.title.toLowerCase().includes(params.q.toLowerCase())
      );
      return {
        nextPageToken: "",
        items: filteredItems,
      };
    }
  });
}
