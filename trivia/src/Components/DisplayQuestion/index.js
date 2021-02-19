import { useEffect, useReducer, useState } from 'react';
import DisplayAnswers from '../DisplayAnswers';

const URL = 'https://opentdb.com/api.php?amount=10';
//&category=27&difficulty=easy&type=multiple

//reducer, takes state and action
//accept GET_QUESTIONS only
//payload is the data
function reducer(state, action) {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
}

function DisplayQuestion({ state, dispatch, isNotVisible, handleVisibility }) {
  const [questions, questionsDispatch] = useReducer(reducer, null);

  //fetch api with useEffect, depending on visibility
  useEffect(() => {
    async function getQuestions() {
      let res = await fetch(
        `${URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`
      );
      let data = await res.json();
      questionsDispatch({ type: 'GET_QUESTIONS', payload: data.results });
    }
    getQuestions();
  }, []);

  //   console.log(
  //     `${URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`
  //   );

  //array of 10 questions
  console.log(questions);
  //question, correct_answer, incorrect_answers

  // create a state for question number
  // which increments by 1
  // when the "NEXT QUESTION" button is clicked
  const [qNumber, setQNumber] = useState(0);

  if (!questions) {
    return <p>Loading...</p>;
  }
  return (
    <div className={isNotVisible?'false':'true'}>
      <p>{questions[qNumber].question}</p>
      <DisplayAnswers
        state={state}
        dispatch={dispatch}
        correctAnswer={questions[qNumber].correct_answer}
        incorrectAnswers={questions[qNumber].incorrect_answers}
        nextQuestion={() => setQNumber(Math.min(9,qNumber+1))}
      />
      <p>{`Score is ${state.score}`}</p>
    </div>
  );
}

export default DisplayQuestion;
