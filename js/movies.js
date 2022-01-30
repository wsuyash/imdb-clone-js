const API = 'https://www.omdbapi.com/?apikey=bd2e447b&i=';

let favMovies = JSON.parse(localStorage.getItem("fav_movies")) || [];

getMovie = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const movieID = urlParams.get('id');
  let response = await fetch(API + movieID, {
    method: 'GET',
  }).then(response => response.json());

  if (response !== undefined && response.Response) {
    if (favMovies.find((movie) => { return movie.id === movieID })) {
      document.getElementById('add-to-fav-btn').style.display = "none";
    }
    if (response.Poster !== "N/A") {
      document.getElementById('movie-info-poster').setAttribute('src', response.Poster);
    }
    document.getElementById('movie-info-name').innerHTML = response.Title;
    document.getElementById('movie-info-year').innerHTML = "(" + response.Year + ")";
    document.getElementById('movie-info-plot').innerHTML = response.Plot;
    document.getElementById('movie-info-rating').innerHTML = response.imdbRating;
  }
}
window.addEventListener('load', getMovie);

saveToFavs = (e) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  let movie = {
    id: id,
    poster: document.getElementById('movie-info-poster').getAttribute('src'),
    title: document.getElementById('movie-info-name').innerHTML,
    year: document.getElementById('movie-info-year').innerHTML,
  };

  if (movie.title === "") {
    return;
  }

  favMovies.push(movie);
  localStorage.setItem("fav_movies", JSON.stringify(favMovies));
  e.target.remove();
}

if (document.getElementById('add-to-fav-btn') !== null) {
  document.getElementById('movie-info-right').lastElementChild.addEventListener('click', saveToFavs);
}
