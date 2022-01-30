const API = 'https://www.omdbapi.com/?apikey=bd2e447b&s=';

let favMovies = JSON.parse(localStorage.getItem("fav_movies")) || [];

saveToFavs = (e) => {
  let parentLi = e.target.parentElement;

  let id = parentLi.id;
  let poster = parentLi.firstElementChild.firstElementChild.getAttribute('src');
  let title = parentLi.firstElementChild.children[1].firstElementChild.innerText;
  let year = parentLi.firstElementChild.children[1].children[1].innerText;

  let movie = {
    id: id,
    poster: poster,
    title: title,
    year: year,
  };

  favMovies.push(movie);
  localStorage.setItem("fav_movies", JSON.stringify(favMovies));
  e.target.remove();
}

handleSearch = async () => {
  const listOfMoviesContainer = document.getElementById('list-of-movies');
  while (listOfMoviesContainer.lastChild) {
    listOfMoviesContainer.removeChild(listOfMoviesContainer.lastChild);
  }

  let query = document.getElementById('search').value;

  let response = [];
  if (query.length >= 1) {
    response = await fetch(API + query).then(response => response.json());
  }
  
  if (response !== undefined && response.Response) {
    for (let i in response.Search) {
      let movieCard = document.createElement('li');
      movieCard.setAttribute('class', 'movie-card');
      movieCard.setAttribute('id', response.Search[i].imdbID);
      let html = `
      	<div class="movie-card-left">
	  <img class="movie-card-img" src=${response.Search[i].Poster} alt="">
      	  <div class="movie-card-name-year">
	    <p class="movie-card-name">${response.Search[i].Title}</p>
      	    <p class="movie-card-year">(${response.Search[i].Year})</p>
	    <a href="/pages/movies.html?id=${response.Search[i].imdbID}">
	      <button class="btn read-more-btn">Read More ></button>
	    </a>
      	  </div>
      	</div>
	${favMovies.find((movie) => {
	  return movie.id === response.Search[i].imdbID;
	}) ? '' : `<button class="btn add-to-favourites-btn">Add to Favourites</button>`}
      `;
      movieCard.innerHTML = html;
      listOfMoviesContainer.append(movieCard);
    }
  }

  if (document.getElementById('list-of-movies').hasChildNodes()) {
    let addToFavButtons = document.getElementsByClassName('add-to-favourites-btn');
  
    for (let i = 0; i < addToFavButtons.length; i++) {
      addToFavButtons[i].addEventListener('click', saveToFavs);
    }
  
  }
}
document.getElementById('search').addEventListener('input', handleSearch);
