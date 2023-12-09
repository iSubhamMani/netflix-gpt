import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import MoviesContainer from "./MoviesContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const { showGptSearch } = useSelector((store) => store.gpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <MoviesContainer />
        </>
      )}

      {/**
       * Main container
       *
       *  - Video Background
       *  - Video title
       * Movies Container
       *  - Movie Lists * N
       *    - Movie Cards
       */}
    </div>
  );
};

export default Browse;
