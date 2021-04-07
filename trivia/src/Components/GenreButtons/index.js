import Button from '../Button';
import React from 'react';
import './index.css';

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
    <div className="genre-buttons">
      {genres.map((genre) => (
        <Button onClick={() => dispatch({ type: 'GENRE', payload: genre[1] })}>
          {genre[0]}
        </Button>
      ))}
    </div>
  );
}

export default GenreButtons;
