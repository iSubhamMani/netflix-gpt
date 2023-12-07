import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    isSignIn ? setIsSignIn(false) : setIsSignIn(true);
  };

  return (
    <div>
      <div className="absolute w-full">
        <img
          className="brightness-50 w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        className="w-[60%] px-16 py-12 max-w-md mt-32 mx-auto right-0 left-0 absolute bg-black
      flex flex-col gap-10 bg-opacity-70 rounded-sm"
      >
        <div>
          <h3 className="text-white font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h3>
        </div>
        {!isSignIn && (
          <div>
            <input
              className="w-full p-4 outline-none rounded-[3px] border-[1px] border-white
            text-white bg-[rgba(23,23,23,0.8)]"
              type="text"
              placeholder="Full name"
            />
          </div>
        )}

        <div>
          <input
            className="w-full p-4 outline-none rounded-[3px] border-[1px] border-white
            text-white bg-[rgba(23,23,23,0.8)]"
            type="email"
            placeholder="Email or phone number"
          />
        </div>
        <div>
          <input
            className="w-full p-4 outline-none rounded-[3px]
            bg-[rgba(23,23,23,0.8)] border-[1px] border-white text-white"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="bg-[#E50914] rounded-[3px] p-2 text-white font-semibold"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already an user? Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
