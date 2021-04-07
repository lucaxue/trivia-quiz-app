import WelcomePage from '../WelcomePage';
import './index.css';
import DisplayQuestion from '../DisplayQuestion';
import { useReducer, useState } from 'react';
import React from 'react';

const initialState = {
  genre: '',
  difficulty: '',
  playerName: 'Guest',
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'GENRE':
      return { ...state, genre: action.payload };
    case 'DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'PLAYER_NAME':
      return { ...state, playerName: action.payload };
    case 'SCORE':
      if (state.difficulty === 'hard') {
        action.payload *= 3;
      }
      if (state.difficulty === 'medium') {
        action.payload *= 2;
      }
      return { ...state, score: state.score + action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  function toggleVisibility() {
    setIsWelcomePage(!isWelcomePage);
  }

  return (
    <div className="App">
      <h1>Trivia Quiz</h1>
      <h2>Player Name: {state.playerName}</h2>
      <DisplayQuestion
        state={state}
        dispatch={dispatch}
        isNotVisible={isWelcomePage}
        toggleVisibility={toggleVisibility}
      />
      <WelcomePage
        dispatch={dispatch}
        isVisible={isWelcomePage}
        handleVisibility={toggleVisibility}
      />
    </div>
  );
}

export default App;
