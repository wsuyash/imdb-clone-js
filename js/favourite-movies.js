// Function to display the list of favourite movies
displayFavs = () => {
  let listOfFavMovies = document.getElementById('list-of-fav-movies');

  // Clearing the old list
  while (listOfFavMovies.lastChild) {
    listOfFavMovies.removeChild(listOfFavMovies.lastChild);
  }

  // Getting the movies list from localStorage
  let favMovies = JSON.parse(localStorage.getItem("fav_movies"));

  // If the list exits:
  if (favMovies !== null) {
    // Creating an entry for each movie, called movieCard, in the favourite movies list
    for (movie in favMovies) {
      let movieCard = document.createElement('li');
      movieCard.setAttribute('class', 'movie-card');
      movieCard.setAttribute('id', favMovies[movie].id);
      let html = `
	  <div class="movie-card-left">
	  <img class="movie-card-img" src=${favMovies[movie].poster} alt="movie poster">
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
displayFavs(); // Function to display the list of favourite movies, triggered on page load/reload

// Function to remove a movie from the favourite movies list in the localStorage
removeFromFavs = (e) => {
  // Getting the "id" of the movie to be removed
  let idToRem = e.target.parentElement.id;

  // Getting the favourite movies list from the localStorage
  let favMovies = JSON.parse(localStorage.getItem("fav_movies"));

  // Searching for the movie in the favourite movies array using the id and splicing the favourite movies array
  for (let i = 0; i < favMovies.length; i++) {
    if (favMovies[i].id === idToRem) {
      favMovies.splice(i, 1);
    }
  }

  // Clearing the localStorage to replace it with the new spliced favourite movies array
  localStorage.clear();
  
  // Setting the new favourite movies array
  localStorage.setItem("fav_movies", JSON.stringify(favMovies));

  // Reloading the page to take effect of the lastest localStorage
  window.location.reload();
}

// If the favourite movies list is not empty, then calling an event on "Remove From Favourites" buttons
if (document.getElementById('list-of-fav-movies').hasChildNodes()) {
  // Getting all the "Remove From Favourites" buttons
  let removeFromFavBtns = document.getElementsByClassName('remove-from-favourites-btn');

  // Adding a click event listener on all the "Remove From Favourites" buttons
  for (let i = 0; i < removeFromFavBtns.length; i++) {
    removeFromFavBtns[i].addEventListener('click', removeFromFavs); // Click event listener which triggers the removeFromFavs() function
  }
}
