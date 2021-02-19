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
  const [isCorrect, setIsCorrect] = useState('grey');
  function updateScore(i) {
    if (i === randomNum) {
      dispatch({ type: 'SCORE', payload: 10 });
      setIsCorrect('green');
      console.log('correct!');
    } else {
      setIsCorrect('red');
      console.log('no!');
    }
    setTimeout(nextQuestion, 2000);
  }
  return (
    <div>
      {/* map buttons hand in handleclick*/}
      {answers.map((answer, index) => (
        <button
          className={isCorrect.toString()}
          onClick={() => {
            updateScore(index);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default DisplayAnswers;
