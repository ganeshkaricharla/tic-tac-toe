import Rule from './Rule';

function Gamerules() {
  const rules = [
    'The game is played on a grid thats 3 squares by 3 squares',
    'You are X, your friend is O. Players take turns putting their marks in empty squares.',
    'The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.',
    'When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.',
  ];
  return (
    <div className='gamerule-container'>
      <h1>Game rule container</h1>
      <div className='rule-container'>
        {rules.map((rule) => {
          return <Rule rulecontent={rule} key={rule} />;
        })}
      </div>
    </div>
  );
}

export default Gamerules;
