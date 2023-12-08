import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px] h-[200px] rounded-lg overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={MOVIE_POSTER_URL + posterPath}
        alt="Poster"
      />
    </div>
  );
};

export default MovieCard;
