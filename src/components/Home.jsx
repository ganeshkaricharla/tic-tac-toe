import Startgame from './Startgame';
import Gamerules from './Gamerules';

function Home(props) {
  return (
    <div className='home-container'>
      <Startgame
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <hr />
      <Gamerules />
    </div>
  );
}

export default Home;
