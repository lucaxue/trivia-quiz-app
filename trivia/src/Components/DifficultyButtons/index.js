function DifficultyButtons({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'easy' })}>
        Easy
      </button>
      <button
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'medium' })}
      >
        Medium
      </button>
      <button onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'hard' })}>
        Hard
      </button>
    </div>
  );
}

export default DifficultyButtons;
