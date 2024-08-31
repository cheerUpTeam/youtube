import axios from "axios";

export const Instance = axios.create({
  baseURL: import.meta.env.VITE_YOUTUBE_KEY,
});
