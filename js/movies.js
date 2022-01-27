const API = 'http://www.omdbapi.com/?apikey=bd2e447b&i=';

getMovie = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const movieID = urlParams.get('id');
  let response = await fetch(API + movieID, {
    method: 'GET',
  }).then(response => response.json());

  if (response !== undefined && response.Response) {
    if (response.Poster !== "N/A") {
      document.getElementById('movie-info-poster').setAttribute('src', response.Poster);
    }
    document.getElementById('movie-info-name').innerHTML = response.Title;
    document.getElementById('movie-info-year').innerHTML = "(" + response.Year + ")";
    document.getElementById('movie-info-plot').innerHTML = response.Plot;
  }
}
window.addEventListener('load', getMovie);
