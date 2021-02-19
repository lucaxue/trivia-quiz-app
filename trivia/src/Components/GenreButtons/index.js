const genres = [
  ['General Knowledge', 9],
  ['Animals', 27],
  ['Books', 10],
  ['Film', 11],
  ['Music', 12],
  ['Anime and Manga', 31],
  ['Television', 14],
  ['Video Games', 15],
  ['Board Games', 16],
  ['Sports', 21],
];

function GenreButtons({ dispatch }) {
  return (
    <div className="genre_buttons">
      {genres.map((genre) => (
        <button onClick={() => dispatch({ type: 'GENRE', payload: genre[1] })}>
          {genre[0]}
        </button>
      ))}
    </div>
  );
}

export default GenreButtons;
