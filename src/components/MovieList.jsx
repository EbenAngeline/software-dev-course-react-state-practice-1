function MovieList({ movies, currentGenre }) {

  const filtered = movies.filter(m => m.genre === currentGenre);

  return (

    <div>

      {filtered.length > 0 ? (

        filtered.map(m => <p key={m.id}>{m.title}</p>)

      ) : (

        <p>No movies found for this genre.</p>

      )}

    </div>

  );

}