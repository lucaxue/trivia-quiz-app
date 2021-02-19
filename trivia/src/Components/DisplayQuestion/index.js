import { useEffect, useReducer } from 'react';

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

function DisplayQuestion({
  genre = 27,
  difficulty = 'easy',
  playerName = 'Bob',
  visibility = true,
}) {
  const [questions, dispatch] = useReducer(reducer, null);

  //fetch api with useEffect, depending on visibility
  useEffect(() => {
    async function getQuestions() {
      let res = await fetch(
        `${URL}&category=${genre}&difficulty=${difficulty}&type=multiple`
      );
      let data = await res.json();
      dispatch({ type: 'GET_QUESTIONS', payload: data.results });
    }
    getQuestions();
  }, [visibility]);

  //array of 10 questions
  console.log(questions);
  //question, correct_answer, incorrect_answers

  return <p></p>;
}

export default DisplayQuestion;
