import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, toggleLoader } from "../utils/slices/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGPTSearch = async () => {
    dispatch(toggleLoader(true));
    // Make api call to open ai to get movie results
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    // for each movie search tmdb
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // returns an array of promises

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    dispatch(toggleLoader(false));
  };

  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`,
      API_OPTIONS
    );
    const fResponse = await response.json();

    return fResponse.results;
  };

  return (
    <div className="pt-[10%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="bg-opacity-80 p-4 bg-black w-[100%]  md:w-[50%] mx-auto flex flex-col md:flex-row gap-4 items-center justify-between rounded-sm"
      >
        <input
          ref={searchText}
          type="text"
          className="border-b-2 border-b-[#E50914] px-4 py-2 font-medium w-[100%] bg-transparent text-center md:text-left text-lg text-white outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearch}
          className="bg-[#E50914]  text-white px-4 py-1 rounded-sm font-medium"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
