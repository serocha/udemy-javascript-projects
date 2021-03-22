const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie-list');

const movies = [];

const addMovie = (movie) => {
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
        if (key !== 'title') {
            text += `${key}: ${movie.info[key]}`
        }
    }
    const newMovie = document.createElement('li');
    newMovie.textContent = text;
    movieList.append(newMovie);
};

const renderMovies = (filter) => {
    if (movies.length === 0) { 
        movieList.classList.remove('visible');
        return;
    } else if ( !movieList.classList.contains('visible') ) {
        movieList.classList.add('visible');
    }
    
    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
    
    const
}

const renderFilteredMovies = (filter) => {
    const filteredMovies = movies.filter( movie => movie.info.title.includes(filter));
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === ''){
        return; //won't spend time setting up validation, just will kick out and continue
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.round(Math.random()*1000)
    };

    movies.push(newMovie);
    addMovie(newMovie);
    console.log(newMovie);
};

const searchMovieHandler = () => {
    const filterText = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);