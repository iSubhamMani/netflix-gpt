import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const MovieTrailer = ({ movieId }) => {
  useTrailerVideo(movieId);

  const trailerVideo = useSelector((store) => store.movies.trailer);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video -mt-28"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
