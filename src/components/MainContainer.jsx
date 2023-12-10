import { useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // early return

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] md:pt-[5%] lg:pt-[0%] bg-black">
      <MovieTitle title={original_title} overview={overview} />
      <MovieTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
