import Home from './Home';
import Header from './Header';
import Playground from './Playground';
import { useState, useEffect } from 'react';
import Winner from './Winner';

function App() {
  const emptyBoard = {
    one: '-',
    two: '-',
    three: '-',
    four: '-',
    five: '-',
    six: '-',
    seven: '-',
    eight: '-',
    nine: '-',
  };
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
  function restartGame() {
    setWinner(0);
    setBoard(emptyBoard);
    setTurnValue('O');
  }
  const [players, setPlayer] = useState({
    player1: 'Player 1',
    player2: 'Player 2',
  });

  const [winner, setWinner] = useState(0);
  const [isStarted, setGameStatus] = useState(false);

  const [turnvalue, setTurnValue] = useState('O');
  const [board, setBoard] = useState(emptyBoard);

  function changeBoard(event) {
    setBoard(function (previous) {
      return { ...previous, [event.target.name]: turnvalue };
    });
    setTurnValue(function (previous) {
      if (previous === 'X') {
        return 'O';
      } else {
        return 'X';
      }
    });
  }
  useEffect(() => {
    function checkBoard() {
      if (
        board.one !== '-' &&
        board.three !== '-' &&
        board.one === board.two &&
        board.two === board.three
      ) {
        setWinner(board.one);
        console.log(' 1 2 3 ');
        return;
      }
      if (
        board.four !== '-' &&
        board.six !== '-' &&
        board.four === board.five &&
        board.five === board.six
      ) {
        setWinner(board.four);
        console.log(' 4  5 6 ');
        return;
      }
      if (
        board.seven !== '-' &&
        board.nine !== '-' &&
        board.seven === board.eight &&
        board.eight === board.nine
      ) {
        setWinner(board.seven);
        console.log(' 7 8 9 ');
        return;
      }
      if (
        board.one !== '-' &&
        board.nine !== '-' &&
        board.one === board.five &&
        board.five === board.nine
      ) {
        setWinner(board.one);

        console.log(' 1 5 9');
        return;
      }
      if (
        board.three !== '-' &&
        board.seven !== '-' &&
        board.three === board.five &&
        board.five === board.seven
      ) {
        setWinner(board.three);

        console.log(' 3 5 7');
        return;
      }
      if (
        board.one !== '-' &&
        board.seven !== '-' &&
        board.one === board.four &&
        board.four === board.seven
      ) {
        setWinner(board.one);
        console.log('1 4 7');
        return;
      }
      if (
        board.two !== '-' &&
        board.eight !== '-' &&
        board.two === board.five &&
        board.five === board.eight
      ) {
        setWinner(board.two);
        console.log('2 5 8');
        return;
      }
      if (
        board.three !== '-' &&
        board.nine !== '-' &&
        board.three === board.six &&
        board.six === board.nine
      ) {
        setWinner(board.one);

        console.log('3 6 9');
        return;
      }
      const val = JSON.stringify(board);
      if (!val.includes('-')) {
        setWinner('T');
      }
    }
    checkBoard();
  }, [board]);

  function handleChange(event) {
    setPlayer((previous) => {
      return { ...previous, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setGameStatus(true);
  }
  if (winner !== 0) {
    return (
      <div className='app-container'>
        <Header />
        <Winner
          winner={
            winner == 'T'
              ? 'TIE, NOBODY'
              : winner === 'O'
              ? players.player1
              : players.player2
          }
          restartGame={restartGame}
        />
      </div>
    );
  } else {
    return (
      <div className='app-container'>
        <Header />
        {isStarted ? (
          <Playground
            players={players}
            board={board}
            changeboard={changeBoard}
          />
        ) : (
          <Home handleChange={handleChange} handleSubmit={handleSubmit} />
        )}
      </div>
    );
  }
}

export default App;
