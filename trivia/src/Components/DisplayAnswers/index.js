import { useState, useEffect } from 'react';
import './index.css';

function DisplayAnswers({
  dispatch,
  correctAnswer,
  incorrectAnswers,
  nextQuestion,
}) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    //generate random number 0-3
    let randomNum = Math.floor(Math.random() * 3);
    //insert it at this random index
    setAnswers([
      ...incorrectAnswers.slice(0, randomNum),
      correctAnswer,
      ...incorrectAnswers.slice(randomNum),
    ]);
  }, [correctAnswer]);

  const [isClicked, setIsClicked] = useState(false);

  //updateScore takes index
  //if index is random number
  //dispatch to up the score
  function updateScore(button, answer) {
    setIsClicked(true);
    if (answer === correctAnswer) {
      dispatch({ type: 'SCORE', payload: 10 });
      button.className = 'correct';
    } else {
      button.className = 'wrong';
    }
    setTimeout(() => {
      setIsClicked(false);
      nextQuestion();
      button.className = 'neutral';
    }, 750);
  }

  return (
    <div className="answer-buttons">
      {/* map buttons hand in updateScore*/}
      {answers.map((answer) => (
        <button
          className={'neutral'}
          disabled={isClicked}
          onClick={(e) => {
            updateScore(e.target, answer);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default DisplayAnswers;
