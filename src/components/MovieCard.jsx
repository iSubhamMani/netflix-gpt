import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="bg-black rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-300">
      <div className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
        <img
          className="w-full object-cover"
          src={MOVIE_POSTER_URL + posterPath}
          alt="Poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
