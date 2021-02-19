import { useEffect, useReducer } from 'react';

function useFetch(url, dependency) {
  //reducer, takes state and action
  //accept GET_QUESTIONS only
  //payload is the data
  function reducer(state, action) {
    switch (action.type) {
      case 'GET_DATA':
        return action.payload;
      default:
        return state;
    }
  }

  const [data, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    async function getData() {
      let res = await fetch(url);
      let data = await res.json();
      dispatch({ type: 'GET_DATA', payload: data });
    }
    getData();
  }, [dependency]);

  return data;
}

export default useFetch;
