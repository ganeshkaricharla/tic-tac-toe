function Playgroundheading(props) {
  return (
    <h1>
      <span className='playground-player'>O - {props.players.player1}</span>
      <span className='playground-vs'>VS</span>
      <span className='playground-player'>X - {props.players.player2}</span>
    </h1>
  );
}

export default Playgroundheading;
