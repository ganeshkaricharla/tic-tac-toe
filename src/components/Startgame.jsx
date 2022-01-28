function Startgame(props) {
  return (
    <div className='startgame-container'>
      <form className='startgame-form'>
        <div className='startgame-inputs'>
          <input
            type='text'
            name='player1'
            className='playerinput'
            placeholder='Player 1'
            onChange={props.handleChange}
          />
          <span className='vs'>VS</span>
          <input
            type='text'
            name='player2'
            className='playerinput'
            placeholder='Player 2'
            onChange={props.handleChange}
          />
        </div>
        <div className='startgame-submits'>
          <button
            type='submit'
            className='startgamebutton'
            onClick={props.handleSubmit}
          >
            Start Game
          </button>
        </div>
      </form>
    </div>
  );
}

export default Startgame;
