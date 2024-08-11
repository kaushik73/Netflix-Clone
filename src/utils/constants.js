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

export const TMDB_MOVIE_URL = "https://api.themoviedb.org/3/movie";
export const TMDB_SEARCH_URL = "https://api.themoviedb.org/3/search";
export const NOW_PLAYING_MOVIES_URL = `${TMDB_MOVIE_URL}/now_playing?&page=1`;
export const POPULAR_MOVIES_URL = `${TMDB_MOVIE_URL}/popular`;
export const TOP_RATED_MOVIES_URL = `${TMDB_MOVIE_URL}/top_rated?&page=1`;
export const UPCOMMING_MOVIES_URL = `${TMDB_MOVIE_URL}/upcoming?&page=1`;
