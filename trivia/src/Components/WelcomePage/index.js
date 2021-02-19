import React, { useState } from 'react';
import GenreButtons from '../GenreButtons';
import DifficultyButtons from '../DifficultyButtons';

// state difficulty , genre, number of questions, player name
// Display box for chosen Diff and Genre

function WelcomeDisplay({ state, dispatch, isVisible, handleVisibility }) {
  function handleSubmit(e) {
    dispatch({ type: 'PLAYER_NAME', payload: e.target[0].value });
    e.preventDefault();
  }

  return (
    <div className={isVisible ? 'visible' : 'invisible'}>
      <form onSubmit={handleSubmit}>
        <input
          className="Player_Name"
          placeholder="Enter Player Name Here..."
          // onChange={(e)=>setPlayerName(e.target.value)}
        ></input>
        {/* <button type="submit" onClick={handleSubmit}></button> */}
      </form>
      <DifficultyButtons dispatch={dispatch} />
      <GenreButtons dispatch={dispatch} />
      <button className="start_button" onClick={handleVisibility}>
        Start Quiz
      </button>
    </div>
  );
}

export default WelcomeDisplay;
//functions handle

//props to take:
//handle(functions)
//difficulty/genre/name/ states

//returns
//DifficultyButtons
//GenreButtons
//input field
