import React, { useState } from 'react';

// state difficulty , genre, number of questions, player name
// Display box for chosen Diff and Genre

function WelcomeDisplay({ state, dispatch, isVisible }) {
  function handleSubmit(e) {
    dispatch({ type: 'PLAYER_NAME', payload: e.target[0].value });
    console.log(e);
    e.preventDefault();
  }
  return (
    <div>
      <div className="difficulty_buttons">
        <form onSubmit={handleSubmit}>
          <input
            className="Player_Name"
            placeholder="Enter Player Name Here..."
            // onChange={(e)=>setPlayerName(e.target.value)}
          ></input>
          {/* <button type="submit" onClick={handleSubmit}></button> */}
        </form>
        <h1>Difficulty: {state.difficulty}</h1>
        <h2>Genre Chosen: {state.genre}</h2>
        <h2>Playen Name: {state.playerName}</h2>
        <button
          onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'easy' })}
        >
          easy
        </button>
        <button
          onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'medium' })}
        >
          medium
        </button>
        <button
          onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'hard' })}
        >
          hard
        </button>
      </div>

      <div className="genre_buttons">
        <button onClick={() => dispatch({ type: 'GENRE', payload: 1 })}>
          Art
        </button>
        <button onClick={() => dispatch({ type: 'GENRE', payload: 27 })}>
          Animals
        </button>
        <button onClick={() => dispatch({ type: 'GENRE', payload: 3 })}>
          History
        </button>
      </div>
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
