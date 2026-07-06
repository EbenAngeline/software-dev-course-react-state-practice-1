function GenreList({ movies, setCurrentGenre }) {

  const genres = [...new Set(movies.map(m => m.genre))];

  return (

    <div>

      {genres.map(g => <button key={g} onClick={() => setCurrentGenre(g)}>{g}</button>)}

    </div>

  );

}
