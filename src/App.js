import React, { useState } from 'react';

import { moviesData } from './Components/MoviesData';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <header>
<h1>My Movies</h1>
<img width="100%" height="100%"src="https://lh3.googleusercontent.com/A2QSnISZGVHHovmBX_X5Qe3vKhJGSOMyC4wtn8IU4oAsFmpFJtiqkuLoGgosBmoeNXnxaeHq=w640-h400-e365-rj-sc0x00ffffff"/>
</header>
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
