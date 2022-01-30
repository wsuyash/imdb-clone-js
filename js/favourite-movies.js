displayFavs = () => {
  let listOfFavMovies = document.getElementById('list-of-fav-movies');

  while (listOfFavMovies.lastChild) {
    listOfFavMovies.removeChild(listOfFavMovies.lastChild);
  }

  let favMovies = JSON.parse(localStorage.getItem("fav_movies"));

  if (favMovies !== null) {
    for (movie in favMovies) {
      let movieCard = document.createElement('li');
      movieCard.setAttribute('class', 'movie-card');
      movieCard.setAttribute('id', favMovies[movie].id);
      let html = `
	  <div class="movie-card-left">
	  <img class="movie-card-img" src=${favMovies[movie].poster === "N/A" ? "../images/Image-Not-Available.png" : favMovies[movie].poster} alt="movie poster">
	    <div class="movie-card-name-year">
	    <p class="movie-card-name">${favMovies[movie].title}</p>
	      <p class="movie-card-year">${favMovies[movie].year}</p>
	    <a href="/pages/movies.html?id=${favMovies[movie].id}">
	      <button class="btn read-more-btn">Read More ></button>
	    </a>
	    </div>
	  </div>
	  <button class="btn remove-from-favourites-btn">Remove From Favourites</button>
      `;
      movieCard.innerHTML = html;
      const listOfFavMoviesContainer = document.getElementById('list-of-fav-movies');
      listOfFavMoviesContainer.prepend(movieCard);
    }
  }
}
displayFavs();

removeFromFavs = (e) => {
  let idToRem = e.target.parentElement.id;
  let favMovies = JSON.parse(localStorage.getItem("fav_movies"));

  for (let i = 0; i < favMovies.length; i++) {
    if (favMovies[i].id === idToRem) {
      favMovies.splice(i, 1);
    }
  }

  localStorage.clear();
  localStorage.setItem("fav_movies", JSON.stringify(favMovies));
  window.location.reload();
  displayFavs();
}

if (document.getElementById('list-of-fav-movies').hasChildNodes()) {
  let removeFromFavBtns = document.getElementsByClassName('remove-from-favourites-btn');

  for (let i = 0; i < removeFromFavBtns.length; i++) {
    removeFromFavBtns[i].addEventListener('click', removeFromFavs);
  }
}
