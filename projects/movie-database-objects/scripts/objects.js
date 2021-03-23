const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// This render method is hugely inefficient since it clears out innerHTML each time.
// This is done in the name of saving time, since the purpose of this assignment
// is to showcase objects. The prior movie example makes better use of such a render method.
const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));
  
  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info } = movie;
    let { getFormattedTitle } = movie; 
    //let getFormattedTitle = getFormattedTitle.bind(movie); // bind when you plan to execute in the future
    let text = movie.getFormattedTitle.call(movie) + ' - '; // call when you want to execute immediately
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val; 
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
