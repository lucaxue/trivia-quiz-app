import Button from '../Button';
import React from 'react';
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
    const randomNum = Math.floor(Math.random() * 3);
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
      {answers.map((answer) => (
        <Button
          className={'neutral'}
          disabled={isClicked}
          onClick={({ target }) => {
            updateScore(target, answer);
          }}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
}

export default DisplayAnswers;
