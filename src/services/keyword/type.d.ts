import popularData from "@datas/popular.json";

export type keywordDatasType = typeof popularData;
export type keywordDataType = (typeof popularData.items)[0];
