export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
export const IMAGE_URL_FOR_DETAIL_PAGE = "https://image.tmdb.org/t/p/original/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "sanskrit", name: "Sanskrit" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
