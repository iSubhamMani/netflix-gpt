import { useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // early return

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <MovieTitle title={original_title} overview={overview} />
      <MovieTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
