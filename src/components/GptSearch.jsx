import { NETFLIX_BG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed w-full -z-10">
        <img
          className="brightness-50 w-full object-cover min-h-screen"
          src={NETFLIX_BG}
          alt=""
        />
      </div>
      <div className="pt-[30%] sm:pt-[10%] md:pt-[5%] lg:pt-[0%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
