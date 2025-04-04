export const homeParams = {
  part: "snippet,contentDetails,statistics",
  chart: "mostPopular",
  maxResults: "9",
  regionCode: "KR",
  pageToken: "",
  key: import.meta.env.VITE_API_KEY,
};

export const categoryParams = {
  hl: "en",
  regionCode: "KR",
  key: import.meta.env.VITE_API_KEY,
};

export const keywordParams = {
  part: "snippet",
  maxResults: "4",
  q: "surfing",
  key: import.meta.env.VITE_API_KEY,
};

export const detailParams = {
  part: "snippet,contentDetails,statistics",
  id: "ma67yOdMQfs",
  key: import.meta.env.VITE_API_KEY,
};
