export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY ||
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjRjZjg0NDk1Mjk4NDc0YWNkMDIzZjFhMzVkNDZjZiIsIm5iZiI6MTcyMzAzOTMwMS45MDc5NjMsInN1YiI6IjY2YjM3ZDM4MjE1OTdiZTM0NzIwNTllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K18fpMLo-q2oGYeCiLecUvciR7I1kz0M5hy7VGDnyxg",
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

export const OPENAI_KEY =
  process.env.REACT_APP_OPENAI_KEY ||
  "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";
