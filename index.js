const API = 'http://www.omdbapi.com/?apikey=bd2e447b&s=';

let moviesArray = ['hello', 'hi'];

handleSearch = async () => {
//	let query = document.getElementById('search').value;

//	let response;
//	if (query.length > 5) {
//		response = await fetch(API + query).then(response => response.json());
//	}
//	console.log(response);
//
// 	{Search: Array(10), totalResults: '831', Response: 'True'}
// Response: "True"
// Search: Array(10)
// 0: {Title: 'Hello, My Name Is Doris', Year: '2015', imdbID: 'tt3766394', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg'}
// 1: {Title: 'Hello Mini', Year: '2019–', imdbID: 'tt9454892', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNTFiOTkyNj…zJjOTEwXkEyXkFqcGdeQXVyMTE0Nzg1NjQ2._V1_SX300.jpg'}
// 2: {Title: 'Hello, Dolly!', Year: '1969', imdbID: 'tt0064418', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BODJmZmFiNz…mEyYjNiXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'}
// 3: {Title: 'Hello Ladies', Year: '2013–2014', imdbID: 'tt2378794', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg'}
// 4: {Title: 'Hello I Must Be Going', Year: '2012', imdbID: 'tt2063666', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMzkzMDc0Nzg5OF5BMl5BanBnXkFtZTcwMDU0MzAyOA@@._V1_SX300.jpg'}
// 5: {Title: 'Hello Ladies: The Movie', Year: '2014', imdbID: 'tt3762944', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ5MjYxMjkwOV5BMl5BanBnXkFtZTgwODE3MjY0MzE@._V1_SX300.jpg'}
// 6: {Title: 'Hello Charlie', Year: '2021', imdbID: 'tt14260080', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNmNjODA5Mj…GIyZjZiXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg'}
// 7: {Title: 'Hello Brother', Year: '1999', imdbID: 'tt0233856', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjk1MDczMG…TcyNjczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}
// 8: {Title: 'Hello Ghost', Year: '2010', imdbID: 'tt1848926', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYjZlYTBlZW…mM2OGU3XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg'}
// 9: {Title: 'Hello Again', Year: '1987', imdbID: 'tt0093175', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BNDljODVmZG…DYxZDk2XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'}
// length: 10
// [[Prototype]]: Array(0)
// totalResults: "831"
// [[Prototype]]: Object

}
