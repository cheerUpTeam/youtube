import popularData from "@datas/popular.json";

export type DetailDataType = typeof popularData;
export type DetailItemsDataType = typeof popularData.items;
export type DetailItemDataType = (typeof popularData.items)[0];
