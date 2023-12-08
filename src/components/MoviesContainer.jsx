import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" -mt-60 relative z-10">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default MoviesContainer;
