function Winner(props) {
  return (
    <div className='winner-container celeb'>
      <h1 className='winner'>{props.winner} won the match</h1>
      <button onClick={props.restartGame} className='restart-button'>
        RESTART
      </button>
    </div>
  );
}

export default Winner;
