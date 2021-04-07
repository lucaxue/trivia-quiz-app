import { useEffect, useReducer } from 'react';

function useFetch(url, dependency) {
  function reducer(state, action) {
    switch (action.type) {
      case 'GET_DATA':
        return action.payload;
      default:
        return state;
    }
  }

  const [data, dispatch] = useReducer(reducer, { results: null });

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      // @ts-ignore
      dispatch({ type: 'GET_DATA', payload: data });
    }
    getData();
  }, [dependency]);

  return data;
}

export default useFetch;
