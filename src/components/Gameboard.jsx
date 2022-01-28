import Tile from './Tile';

function Gameboard(props) {
  const numberWords = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return (
    <div className='gameboard-container'>
      <div className='game-board'>
        {numberWords.map((n) => {
          return (
            <Tile
              key={n}
              changeboard={props.changeboard}
              name={n}
              value={props.board[n]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gameboard;
