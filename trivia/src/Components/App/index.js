import WelcomeDisplay from '../WelcomePage';
import './index.css';
import DisplayQuestion from '../DisplayQuestion';
import { useReducer, useState } from 'react';
// states
// visibility of pages
// genre
// difficulty
// player Name

//functions to manipulate WelcomePage
//handleGenre
//handleDifficulty
//handleName
//handleVisibility

//props to pass down
// visibility component to both WelcomePage and DisplayQuestions
// handleVisibility to both componentns
// handleGenre & handleDifficulty & handleName to Welcome page onlt
// Pass all states to DisplayQuestion

// return
// App has 2 components - DisplayQuestions and WelcomePage

let initialState = {
  genre: '',
  difficulty: '',
  playerName: 'Bob',
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
      } else if (state.difficulty === 'easy') {
        action.payload *= 2;
      }

      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  function handleVisibility() {
    setIsWelcomePage(!isWelcomePage);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <DisplayQuestion
        state={state}
        dispatch={dispatch}
        isNotVisible={isWelcomePage}
        handleVisibility={handleVisibility}
      />
      <WelcomeDisplay
        state={state}
        dispatch={dispatch}
        isVisible={isWelcomePage}
        handleVisibility={handleVisibility}
      />
      <button onClick={handleVisibility}>Change Page</button>
    </div>
  );
}

export default App;
