// const API_WEB = "https://api.themoviedb.org/3/search/movie?";
// const API_KEY = "api_key=8a38092ae2d24fc685ebce0502669b7c";

function fetchVideos() {
  return fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=8a38092ae2d24fc685ebce0502669b7c`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

fetchVideos();

// ${ API_WEB }${ API_KEY }
