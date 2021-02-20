import { useState } from 'react';
import './index.css';
import useFetch from '../Hooks/useFetch';
import DisplayAnswers from '../DisplayAnswers';

const REACT_APP_API_URL = 'https://opentdb.com/api.php?amount=10';
//&category=27&difficulty=easy&type=multiple

function DisplayQuestion({ state, dispatch, isNotVisible, handleVisibility }) {
  let { results: questions } = useFetch(
    `${REACT_APP_API_URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`,
    isNotVisible
  ) ?? { results: '' };

  //   console.log(`${URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`);

  // create a state for question number
  const [qNum, setQNum] = useState(0);

  if (!questions) {
    return <div className={'invisible'}></div>;
  }

  return (
    <div
      id="display_question"
      className={isNotVisible ? 'invisible' : 'visible'}
    >
      <p>{`${qNum + 1}. ${questions[qNum].question}`}</p>
      <DisplayAnswers
        state={state}
        dispatch={dispatch}
        correctAnswer={questions[qNum].correct_answer}
        incorrectAnswers={questions[qNum].incorrect_answers}
        nextQuestion={() => setQNum(Math.min(9, qNum + 1))}
      />
      <p>{`Score is ${state.score}`}</p>
    </div>
  );
}

export default DisplayQuestion;
