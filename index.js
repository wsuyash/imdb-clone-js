// API to fetch data from
const API = 'http://www.omdbapi.com/?apikey=bd2e447b&s=';

// Initialising or getting the already present favourite movies array from localStorage
let favMovies = JSON.parse(localStorage.getItem("fav_movies")) || [];

// Function to save movies to favourites on click of "Add To Favourites" button
saveToFavs = (e) => {
  let parentLi = e.target.parentElement;

  // Getting/Setting the data to be stored in localStorage
  let id = parentLi.id;
  let poster = parentLi.firstElementChild.firstElementChild.getAttribute('src');
  let title = parentLi.firstElementChild.children[1].firstElementChild.innerText;
  let year = parentLi.firstElementChild.children[1].children[1].innerText;

  // Creating the new movie object with the required fields and values
  let movie = {
    id: id,
    poster: poster,
    title: title,
    year: year,
  };

  // Pushing the new movie object to the favourite movies array in localStorage
  favMovies.push(movie);
  
  // Updating the localStorage
  localStorage.setItem("fav_movies", JSON.stringify(favMovies));

  // Removing the "Add To Favourites" button
  e.target.remove();
}

// Function to populate search results on input
handleSearch = async () => {
  const listOfMoviesContainer = document.getElementById('list-of-movies');

  // Deleting all the previous search results
  while (listOfMoviesContainer.lastChild) {
    listOfMoviesContainer.removeChild(listOfMoviesContainer.lastChild);
  }

  // Getting the term to search
  let query = document.getElementById('search').value;

  // Initialising response
  let response = [];

  if (query.length >= 1) {
    // Fetching response from the API
    response = await fetch(API + query).then(response => response.json());
  }
  
  // On successful response:
  if (response !== undefined && response.Response) {
    // Creating an entry for each movie, called movieCard, in the response
    for (let i in response.Search) {
      let movieCard = document.createElement('li');
      movieCard.setAttribute('class', 'movie-card');
      movieCard.setAttribute('id', response.Search[i].imdbID);

      // Declaring the movieCard structure
      let html = `
      	<div class="movie-card-left">
	  <img class="movie-card-img" src=${response.Search[i].Poster === "N/A" ? "../images/Image-Not-Available.png" : response.Search[i].Poster} alt="movie poster">
      	  <div class="movie-card-name-year">
	    <p class="movie-card-name">${response.Search[i].Title}</p>
      	    <p class="movie-card-year">(${response.Search[i].Year})</p>
	    <a href="/pages/movies.html?id=${response.Search[i].imdbID}">
	      <button class="btn read-more-btn">Read More ></button>
	    </a>
      	  </div>
      	</div>
	${favMovies.find((movie) => {
	  // Checking if the movie is already in the favourites list and deciding to show the "Add To Favourites" button depending on that
	  return movie.id === response.Search[i].imdbID;
	}) ? '' : `<button class="btn add-to-favourites-btn">Add to Favourites</button>`}
      `;

      movieCard.innerHTML = html;

      // Appending the new movie to the result
      listOfMoviesContainer.append(movieCard);
    }
  }

  // Checking whether the search results are empty
  if (document.getElementById('list-of-movies').hasChildNodes()) {
    // If not empty, getting all the "Add To Favourites" buttons
    let addToFavButtons = document.getElementsByClassName('add-to-favourites-btn');
  
    // Attaching an event listener to all the "Add To Favourites" buttons which triggers the saveToFavs() function
    for (let i = 0; i < addToFavButtons.length; i++) {
      addToFavButtons[i].addEventListener('click', saveToFavs); // Click event which triggers the saveToFavs() function
    }
  
  }
}
document.getElementById('search').addEventListener('input', handleSearch); // Event listener on input in the search box which triggers the handleSearch() function
