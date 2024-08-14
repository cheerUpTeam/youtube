import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://localhost:5173/datas",
});
