import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { client } from "../utils/openai";

const GptSearchBox = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptInputSearch = async () => {
    const searchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div>
      <div className="flex justify-center pt-3">
        <input
          type="text"
          ref={searchText}
          className="w-[40%] p-2 rounded-md px-4 text-xl placeholder:text-lg"
          // placeholder={lang.hindi.gptSearchPlaceholder}
          placeholder={lang[selectedLanguage]?.gptSearchPlaceholder}
        />
        <div className="">
          <button
            className=" bg-slate-100 mx-2 p-4 rounded-md from-neutral-950 text-lg"
            onClick={handleGptInputSearch}
          >
            {lang[selectedLanguage].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBox;
