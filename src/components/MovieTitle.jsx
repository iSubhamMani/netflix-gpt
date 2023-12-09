const MovieTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] aspect-video px-20 w-full absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl text-white ">{title}</h1>
      <p className="text-lg mt-4 text-white w-1/4">{overview}</p>
      <div className="flex gap-2 mt-8">
        <button className="bg-white text-black px-6 py-2 rounded-[5px] text-2xl font-medium flex items-center gap-2 hover:bg-opacity-80 transition ease-in-out duration-300">
          <i className="fa-solid fa-play"></i>
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white px-6 py-2 rounded-[5px] text-2xl font-medium flex items-center gap-2 hover:bg-opacity-40 transition ease-in-out duration-300">
          <i className="fa-solid fa-circle-info"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
