import { useState } from 'react';
import './index.css';
import useFetch from '../../Hooks/useFetch';
import DisplayAnswers from '../DisplayAnswers';
import React from 'react';
import Button from '../Button';

const REACT_APP_API_URL = 'https://opentdb.com/api.php?amount=10';
//&category=27&difficulty=easy&type=multiple

function DisplayQuestion({ state, dispatch, isNotVisible, toggleVisibility }) {
  const { results: questions } = useFetch(
    `${REACT_APP_API_URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`,
    isNotVisible
  );

  // create a state for question number
  const [questionIndex, setQuestionIndex] = useState(0);

  if (!questions) {
    return <div className={'invisible'}></div>;
  }

  return (
    <div
      id="display_question"
      className={isNotVisible ? 'invisible' : 'visible'}
    >
      {questionIndex < 10 ? (
        <>
          <p>{`${questionIndex + 1}. ${questions[questionIndex].question}`}</p>(
          <DisplayAnswers
            dispatch={dispatch}
            correctAnswer={questions[questionIndex].correct_answer}
            incorrectAnswers={questions[questionIndex].incorrect_answers}
            nextQuestion={() => {
              setQuestionIndex(questionIndex + 1);
            }}
          />
          <p>Score is {state.score}</p>
        </>
      ) : (
        <>
          <h2>
            Well done, {state.playerName} your final score is {state.score}!
          </h2>
          <Button
            onClick={() => {
              toggleVisibility();
              setQuestionIndex(0);
              dispatch({ type: 'RESET' });
            }}
          >
            Go back to the home page
          </Button>
        </>
      )}
    </div>
  );
}

export default DisplayQuestion;
