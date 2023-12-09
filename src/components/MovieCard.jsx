import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="bg-black">
      <div className="w-[200px] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
        <img
          className="w-full"
          src={MOVIE_POSTER_URL + posterPath}
          alt="Poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
