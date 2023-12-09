import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]">
      <form
        action=""
        className="bg-opacity-80 p-4 bg-black w-[50%] mx-auto flex gap-4 items-center justify-between rounded-sm"
      >
        <input
          type="text"
          className="border-b-2 border-b-[#E50914] px-4 py-2 font-medium w-[70%] bg-transparent text-lg text-white outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-[#E50914]  text-white px-4 py-1 rounded-sm font-medium">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
