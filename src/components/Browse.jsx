import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import MoviesContainer from "./MoviesContainer";

const Browse = () => {
  useNowPlayingMovies();

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
