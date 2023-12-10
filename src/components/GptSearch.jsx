import { NETFLIX_BG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed w-full -z-10">
        <img
          className="brightness-50 w-full object-cover min-h-screen"
          src={NETFLIX_BG}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
