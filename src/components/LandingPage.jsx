const LandingPage = () => {
  return (
    <div>
      <div className="absolute w-full min-h-screen">
        <img
          className="brightness-50 w-full object-cover min-h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <div className="text-white absolute top-[50%] pl-10 ">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <p className="font-bold text-lg mb-8">
          Starts at ₹149. Cancel anytime.
        </p>
        <div className="">
          <p className="text-gray-400 mb-2">Ready to watch?</p>
          <button className="bg-[#E50914] font-semibold px-4 py-2 rounded-sm">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
