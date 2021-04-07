import React, { useState } from 'react';
import './index.css';
import GenreButtons from '../GenreButtons';
import DifficultyButtons from '../DifficultyButtons';

// state difficulty , genre, number of questions, player name
// Display box for chosen Diff and Genre

function WelcomePage({ dispatch, isVisible, handleVisibility }) {
  function handleSubmit(e) {
    dispatch({ type: 'PLAYER_NAME', payload: e.target[0].value });
    e.preventDefault();
  }

  return (
    <div id="welcome-page" className={isVisible ? 'visible' : 'invisible'}>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter Name Here..."></input>
      </form>
      <DifficultyButtons dispatch={dispatch} />
      <GenreButtons dispatch={dispatch} />
      <button className="start-button" onClick={handleVisibility}>
        Start Quiz
      </button>
    </div>
  );
}

export default WelcomePage;
