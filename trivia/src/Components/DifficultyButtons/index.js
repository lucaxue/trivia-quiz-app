import './index.css';
function DifficultyButtons({ dispatch }) {
  return (
    <div className="difficulty-buttons">
      <button
        id="easy-button"
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'easy' })}
      >
        Easy
      </button>
      <button
        id="medium-button"
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'medium' })}
      >
        Medium
      </button>
      <button
        id="hard-button"
        onClick={() => dispatch({ type: 'DIFFICULTY', payload: 'hard' })}
      >
        Hard
      </button>
    </div>
  );
}

export default DifficultyButtons;
