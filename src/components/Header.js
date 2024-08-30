import React, { useEffect, useState } from "react";
import signOutIcon from "../Images/signout-icon.png";
import netflixLogo from "../Images/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import dayLogo from "../Images/day-mode.png";
import nightLogo from "../Images/moon.png";
import {
  addMoviesFromKeyword,
  addSearchResult,
  toggleGptSearchView,
} from "../utils/store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeDarkTheme, changeLanguage } from "../utils/store/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const darkTheme = useSelector((store) => store.config.darkTheme);
  const user = useSelector((store) => store.user);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to 'en'

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const clearSearchBar = () => {
    dispatch(addMoviesFromKeyword(null));
    dispatch(addSearchResult(null));
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    setSelectedLanguage(e.target.value);
  };

  const handleGoToBrowseOrGptSearchPage = () => {
    dispatch(toggleGptSearchView());
  };

  const toggleDarkTheme = () => {
    dispatch(changeDarkTheme(!darkTheme));
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={netflixLogo}
          onClick={() => {
            handleGoToBrowseOrGptSearchPage();
            clearSearchBar();
          }}
          alt="logo"
          className="w-24 md:w-36 cursor-pointer"
        />
      </div>

      {user && (
        <div className="flex items-center gap-2 md:gap-4">
          {showGptSearch && (
            <select
              className="bg-black p-2 m-1 rounded-md"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          {!showGptSearch && (
            <>
              <p className="hidden md:block">Hi, {user.displayName}</p>
              <img
                className="hidden md:block w-10 h-6 md:w-15 md:h-10"
                src={signOutIcon}
                alt="Sign Out Icon"
              />
            </>
          )}
          <button
            onClick={() => {
              handleGoToBrowseOrGptSearchPage();
              clearSearchBar();
            }}
            className={`${
              darkTheme
                ? "bg-gray-800 hover:bg-gray-700 text-slate-300"
                : "bg-gray-300 hover:bg-gray-200 text-black"
            } font-bold py-1 px-3 md:py-2 md:px-4 rounded`}
          >
            {showGptSearch ? lang[selectedLanguage]?.home : "Gpt Search"}
          </button>

          <button
            onClick={handleSignOut}
            className={`${
              darkTheme
                ? "bg-gray-800 hover:bg-gray-700 text-slate-300"
                : "bg-gray-300 hover:bg-gray-200 text-black"
            } font-bold py-1 px-3 md:py-2 md:px-4 rounded`}
          >
            {lang[selectedLanguage]?.logout}
          </button>
          {/* Theme Swithcher */}
          {showGptSearch && (
            <div className="bg-slate-200 px-2 py-1">
              <button className="" onClick={toggleDarkTheme}>
                <img
                  className="w-7 h-7 bg-transparent"
                  alt={darkTheme ? "dayLogo" : "nightLogo"}
                  src={darkTheme ? dayLogo : nightLogo}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
