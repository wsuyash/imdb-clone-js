// API to fetch data from
const API = 'https://www.omdbapi.com/?apikey=bd2e447b&i=';

// Initialising or getting the already present favourite movies array from localStorage
let favMovies = JSON.parse(localStorage.getItem("fav_movies")) || [];

// Function to get the particular movie info on page load
getMovie = async () => {
  // Getting the URL
  const queryString = window.location.search;

  // Getting the URL parameters
  const urlParams = new URLSearchParams(queryString);

  // Filtering "id" from the URL parameters
  const movieID = urlParams.get('id');

  // Fetching response from the API
  let response = await fetch(API + movieID).then(response => response.json());

  // On successful response:
  if (response !== undefined && response.Response) {
    // If the movie is already in the favourites, then delete the "Add To Favourites" button
    if (favMovies.find((movie) => { return movie.id === movieID })) {
      document.getElementById('add-to-fav-btn').remove();
    }

    // Use the movie poster if it can be fetched from the API, otherwise, default value specified in the HTML is used
    if (response.Poster !== "N/A") {
      document.getElementById('movie-info-poster').setAttribute('src', response.Poster);
    }

    // Setting all the movie details to display
    document.getElementById('movie-info-name').innerHTML = response.Title;
    document.getElementById('movie-info-year').innerHTML = "(" + response.Year + ")";
    document.getElementById('movie-info-plot').innerHTML = response.Plot;
    document.getElementById('movie-info-rating').innerHTML = response.imdbRating;
  }
}
window.addEventListener('load', getMovie); // Event listener on page load which triggers the getMovie() function

// Function to save movies to favourites on click of "Add To Favourites" button
saveToFavs = (e) => {
  // Getting the URL
  const queryString = window.location.search;

  // Getting the URL parameters
  const urlParams = new URLSearchParams(queryString);

  // Filtering "id" from the URL parameters
  const id = urlParams.get('id');

  // Creating the new movie object with the required fields and values
  let movie = {
    id: id,
    poster: document.getElementById('movie-info-poster').getAttribute('src'),
    title: document.getElementById('movie-info-name').innerHTML,
    year: document.getElementById('movie-info-year').innerHTML,
  };

  // Only save the movie if it has a title otherwise return
  if (movie.title === "") {
    return;
  }

  // Pushing the new movie object to the favourite movies array in localStorage
  favMovies.push(movie);

  // Updating the localStorage
  localStorage.setItem("fav_movies", JSON.stringify(favMovies));

  // Removing the "Add To Favourites" button
  e.target.remove();
}

// Checking if the "Add To Favourites" button exits and then adding a click event listener to it which triggers the saveToFavs() function
if (document.getElementById('add-to-fav-btn') !== null) {
  document.getElementById('movie-info-right').lastElementChild.addEventListener('click', saveToFavs);
}
