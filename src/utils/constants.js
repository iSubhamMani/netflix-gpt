const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const PROFILE_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDE5OTgzZDdiY2M1MGVjNjQ1NGUwNzdmNDIyYjY3MSIsInN1YiI6IjY1NzMwOWI5OTQ1YzIwMDBlYTRmMjFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JP6dOxex5zYgAZH-A4T58YEqYOors-XHSmy1zAQgs_w",
  },
};

const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w200/";

export {
  NETFLIX_LOGO,
  PROFILE_AVATAR,
  NETFLIX_BG,
  API_OPTIONS,
  MOVIE_POSTER_URL,
};

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "bengali", name: "Bengali" },
];
