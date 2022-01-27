const API = 'http://www.omdbapi.com/?apikey=bd2e447b&i=';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieID = urlParams.get('id');

let response;
getMovie = async () => {
  response = await fetch(API + movieID).then(response => response.json());
  console.log(response);

  if (response.Poster !== "N/A") {
    document.getElementById('movie-info-poster').setAttribute('src', response.Poster);
  }



}
getMovie();
