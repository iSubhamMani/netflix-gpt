import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-12 py-4">
      <h1 className="font-medium text-xl md:text-3xl mb-4 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll py-2">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
