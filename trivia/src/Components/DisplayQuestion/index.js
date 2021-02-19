import { useEffect, useReducer, useState } from 'react';

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

function DisplayQuestion({ state, isNotVisible }) {
  const [questions, dispatch] = useReducer(reducer, null);

  //fetch api with useEffect, depending on visibility
  useEffect(() => {
    async function getQuestions() {
      let res = await fetch(
        `${URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`
      );
      let data = await res.json();
      dispatch({ type: 'GET_QUESTIONS', payload: data.results });
    }
    getQuestions();
  }, [state]);

  console.log(
    `${URL}&category=${state.genre}&difficulty=${state.difficulty}&type=multiple`
  );

  //array of 10 questions
  console.log(questions);
  //question, correct_answer, incorrect_answers
  if (!questions) {
    return <p>Loading...</p>;
  }
  // create a state for question number
  // which increments by 1
  // when the "NEXT QUESTION" button is clicked
  // const [qNumber, setQNumber] = useState(0);

  return (
    <div>
      {questions.map((question) => (
        <p>{question.question}</p>
      ))}
    </div>
  );
}

export default DisplayQuestion;
