import popularData from "@datas/popular.json";

export type PopularDataType = typeof popularData;
export type PopularItemsDataType = typeof popularData.items;
export type PopularItemDataType = (typeof popularData.items)[0];
