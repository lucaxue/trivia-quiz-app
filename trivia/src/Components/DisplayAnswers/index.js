import { useState } from 'react';
import './index.css';

function DisplayAnswers({
  dispatch,
  correctAnswer,
  incorrectAnswers,
  nextQuestion,
}) {
  //generate random number 0-3
  let randomNum = Math.floor(Math.random() * 3);
  //insert it at this random index
  let answers = [...incorrectAnswers];
  answers.splice(randomNum, 0, correctAnswer);
  //handleclick takes index
  //if index is random number
  //dispatch to up the score

  const [isClicked, setIsClicked] = useState(false);

  function updateScore(button, i) {
    setIsClicked(true);
    if (i === randomNum) {
      dispatch({ type: 'SCORE', payload: 10 });
      button.className = 'correct';
    } else {
      button.className = 'wrong';
    }
    setTimeout(() => {
      setIsClicked(false);
      nextQuestion();
      button.className = 'neutral';
    }, 2000);
  }

  return (
    <div>
      {/* map buttons hand in handleclick*/}
      {answers.map((answer, index) => (
        <button
          className={'neutral'}
          disabled={isClicked}
          onClick={(e) => {
            updateScore(e.target, index);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default DisplayAnswers;
