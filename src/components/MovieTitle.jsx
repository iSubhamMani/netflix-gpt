const MovieTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] aspect-video px-10 md:px-20 w-full absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl text-white ">
        {title}
      </h1>
      <p className="hidden lg:block text-lg mt-4 text-white w-1/4">
        {overview}
      </p>
      <div className="flex flex-col md:flex-row gap-2 mt-8">
        <div>
          <button className="bg-white text-black px-2 md:px-6 py-1 md:py-2 rounded-[5px] text-md md:text-2xl font-medium flex items-center gap-2 hover:bg-opacity-80 transition ease-in-out duration-300">
            <i className="fa-solid fa-play"></i>
            Play
          </button>
        </div>
        <div>
          <button className="bg-gray-500 bg-opacity-50 text-white px-2 md:px-6 py-1 md:py-2 rounded-[5px] text-md whitespace-nowrap md:text-2xl font-medium flex items-center gap-2 hover:bg-opacity-40 transition ease-in-out duration-300">
            <i className="fa-solid fa-circle-info"></i>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
