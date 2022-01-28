import Playgroundheading from './Playgroundheading';
import Gameboard from './Gameboard';

function Playground(props) {
  return (
    <div className='playground-container'>
      <Playgroundheading players={props.players} />
      <Gameboard board={props.board} changeboard={props.changeboard} />
    </div>
  );
}

export default Playground;
