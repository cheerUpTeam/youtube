export const homeParams = {
  part: "snippet,contentDetails,statistics",
  chart: "mostPopular",
  regionCode: "KR",
  key: import.meta.env.VITE_API_KEY,
};

export const categoryParams = {
  hl: "en",
  regionCode: "KR",
  key: import.meta.env.VITE_API_KEY,
};

export const keywordParams = {
  part: "snippet",
  maxResults: "5",
  q: "surfing",
  key: import.meta.env.VITE_API_KEY,
};
