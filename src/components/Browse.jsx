import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import MoviesContainer from "./MoviesContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <MoviesContainer />

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
