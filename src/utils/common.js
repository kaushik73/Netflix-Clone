import { API_OPTIONS } from "./constants";

export const getTMDBApiData = async (url) => {
  const data = await fetch(url, API_OPTIONS);
  const json = await data.json();
  return json.results;
};
