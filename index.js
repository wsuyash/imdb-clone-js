const API = 'http://www.omdbapi.com/?apikey=bd2e447b&s=';

let moviesArray = ['hello', 'hi'];

handleSearch = async () => {
  let query = document.getElementById('search').value;

  let response;
  if (query.length >= 2) {
    response = await fetch(API + query).then(response => response.json());
  }

  console.log(response);
  
  if (response !== undefined && response.Response) {
    for (let i = 0; i < response.Search.length; i++) {
      let movieCard = document.createElement('li');
      movieCard.setAttribute('class', 'movie-card');
      movieCard.setAttribute('id', response.Search[i].imdbID);
      let html = `
      	<div class="movie-card-left">
	  <img class="movie-card-img" src=${response.Search[i].Poster} alt="">
      	  <div class="movie-card-name-year">
	    <p class="movie-card-name">${response.Search[i].Title}</p>
      	    <p class="movie-card-year">${response.Search[i].Year}</p>
	    <a href="/pages/movies.html?id=${response.Search[i].imdbID}">
	      <button id="read-more" class="btn read-more-btn">Read More ></button>
	    </a>
      	  </div>
      	</div>
      	<button class="btn add-to-favourites-btn">Add to Favourites</button>
      `;
      movieCard.innerHTML = html;
      
      const listOfMoviesContainer = document.getElementById('list-of-movies');
      listOfMoviesContainer.prepend(movieCard);
    }
  }
}
document.getElementById('search').addEventListener('input', handleSearch);
