import React, { useState } from 'react';

import GenreList from './GenreList';

import MovieList from './MovieList';
import mock-data from './mock-data';


function App() {

  const [currentGenre, setCurrentGenre] = useState('');

  const [movies] = useState(mockData);

  return (

    <div>

      <GenreList movies={movies} setCurrentGenre={setCurrentGenre} />

      <MovieList movies={movies} currentGenre={currentGenre} />

    </div>

  );

}

export default App;