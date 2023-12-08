import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { NETFLIX_LOGO, PROFILE_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;

        // update store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }

      // Unsubscribe on unmount
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between items-center absolute z-10 w-full top-0 px-8 bg-gradient-to-b from-black">
      <img className="w-[200px]" src={NETFLIX_LOGO} alt="Logo" />
      {user && (
        <div className="flex gap-4 px-4">
          <img className="w-10 h-10" src={PROFILE_AVATAR} alt="Avatar" />
          <div className="flex items-center justify-center">
            <button
              onClick={handleSignOut}
              className="bg-[#E50914] text-white px-2 py-1 rounded-sm font-semibold"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
