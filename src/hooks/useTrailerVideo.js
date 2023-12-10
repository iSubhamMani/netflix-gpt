import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const fResponse = await response.json();

    const filteredData = fResponse.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredData.length
      ? filteredData[0]
      : fResponse.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);
};

export default useTrailerVideo;
