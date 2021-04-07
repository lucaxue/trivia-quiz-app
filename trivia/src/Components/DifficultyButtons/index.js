import Button from '../Button';
import React from 'react';
import './index.css';
function DifficultyButtons({ dispatch }) {
  return (
    <div className="difficulty-buttons">
      <Button
        id="easy-button"
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'easy' })}
      >
        Easy
      </Button>
      <Button
        id="medium-button"
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'medium' })}
      >
        Medium
      </Button>
      <Button
        id="hard-button"
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'hard' })}
      >
        Hard
      </Button>
    </div>
  );
}

export default DifficultyButtons;
