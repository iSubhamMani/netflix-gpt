import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import SearchShimmer from "./SearchShimmer";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const { showLoader } = useSelector((store) => store.gpt);

  return (
    <>
      {showLoader ? (
        <SearchShimmer />
      ) : (
        <div className="bg-black bg-opacity-80">
          <div>
            {movieNames?.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movies={movieResults[index]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GptMovieSuggestions;
