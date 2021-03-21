/*
    Simple project where you can add and remove movies to a list that the user creates.
    This is designed to teach about traversing the DOM.
*/

const backdrop = document.getElementById('backdrop');
const startAddMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const cancelMovieBtn = addMovieModal.querySelector('.btn--passive');
const addMovieBtn = cancelMovieBtn.nextElementSibling;
const modalContent = addMovieModal.querySelector('.modal__content');
const userInputs = modalContent.querySelectorAll('input');
const entryText = document.getElementById('entry-text');
const movieListElement = document.getElementById('movie-list');

let movieList = [];

const clearInput = () => {
    for (const input of userInputs) {
        input.value = input.defaultValue;
    };
};

const updateUI = () => {
    if (movieList.length === 0) {
        entryText.style.display = 'block';
    } else {
        entryText.style.display = 'none';
    }
};

const addNewMovie = (movie) => {
    movieList.push(movie);
    renderNewMovieElement(movie);
};

const deleteMovie = movieID => {
    let index = 0;
    for (const movie of movieList){
        if (movie.id === movieID) {
            break;
        }
        index++;
    }
    movieList.splice(index, 1);
    movieListElement.children[index].remove();
    updateUI();
};

const renderNewMovieElement = (movie) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class='movie-element__image'>
            <img src='${movie.imageUrl}' alt='${movie.title}'>
        </div>
        <div class='movie-element__info'>
            <h2>${movie.title}</h2>
            <p>${movie.rating}/5 stars</p>
        </div>
    `;

    newMovieElement.addEventListener('click', () => deleteMovieHandler(movie.id));
    movieListElement.append(newMovieElement);
}

const toggleBackdropHandler = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModalHandler = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdropHandler();
    clearInput();
    backdrop.addEventListener('click', () => toggleMovieModalHandler() );
};

const deleteMovieHandler = movieID => {
    const deleteMovieModal = document.getElementById('delete-modal');
    let yesBtn = deleteMovieModal.querySelector('.btn--danger');
    let noBtn = deleteMovieModal.querySelector('.btn--passive');

    yesBtn.replaceWith(yesBtn.cloneNode(true)); // Big fat workaround to clear event listeners duplicating
    noBtn.replaceWith(noBtn.cloneNode(true));

    yesBtn = deleteMovieModal.querySelector('.btn--danger'); // reassign button for new event listener hook
    noBtn = deleteMovieModal.querySelector('.btn--passive');

    deleteMovieModal.classList.add('visible');
    backdrop.classList.add('visible');

    yesBtn.addEventListener('click', () => {
        deleteMovie(movieID);
        deleteMovieModal.classList.remove('visible'); // could be put into some function
        backdrop.classList.remove('visible');
    });
    
    noBtn.addEventListener('click', () => {
        deleteMovieModal.classList.remove('visible');
        backdrop.classList.remove('visible');
    });

    backdrop.addEventListener('click', () => {
        deleteMovieModal.classList.remove('visible');
        backdrop.classList.remove('visible');
    });
};

const addMovieBtnHandler = () => {
    let title = userInputs[0].value;
    let imageUrl = userInputs[1].value;
    let rating = userInputs[2].value;

    if (!title.trim()) {
        alert('Please enter a title.');
        userInputs[0].value = userInputs[0].defaultValue;
        return;
    } else if (!imageUrl.trim()) {
        alert('Please enter a thumbnail.');
        userInputs[1].value = userInputs[1].defaultValue;
        return;
    } else if (!rating.trim() || rating < 0 || rating > 5) {
        if (!rating) {
            alert('Please enter a rating.');
            userInputs[2].value = userInputs[2].defaultValue;
        } else {
            alert('Please enter a rating between 0 and 5.');
            userInputs[2].value = userInputs[2].defaultValue;
        }
        return;
    };

    let movie = {
        id: Math.random().toString(),
        title: title,
        imageUrl: imageUrl,
        rating: Math.round(rating*2)/2
    };
    
    addNewMovie(movie);
    toggleMovieModalHandler();
    updateUI();
};

startAddMovieBtn.addEventListener('click', () => toggleMovieModalHandler() );
cancelMovieBtn.addEventListener('click', () => toggleMovieModalHandler() );
addMovieBtn.addEventListener('click', () => addMovieBtnHandler() );

