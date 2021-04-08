import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Square from './Square';
import { calculateWinner, computersTurnHandler } from './handlers';
import {
  addAlgWinner, addHumanWinner, addTie,
} from '../actions/roundAction';
import {
  playerStep, prohibitClick, allowClick, algWinner, humanWinner, noWinner,
} from '../actions/gameAction';

const Board = () => {
  const dispatch = useDispatch();

  const { squares, clickAllowed, status } = useSelector((state) => state.game);
  const { rounds } = useSelector((state) => state.round);

  const statusHandler = (sq, humLet, compLet) => {
    const winner = calculateWinner(sq);
    if (winner === humLet) {
      dispatch(humanWinner());
      dispatch(addHumanWinner());
    }
    if (winner === compLet) {
      dispatch(algWinner());
      dispatch(addAlgWinner());
    }
    if (!winner) {
      dispatch(noWinner());
      dispatch(addTie());
    }
  };

  const computersStep = (sq, humLet, compLet) => {
    const sq2 = [...sq];
    const compI = computersTurnHandler(sq2, humLet, compLet);
    sq2[compI] = compLet;
    dispatch(playerStep(compI, compLet));
    if (calculateWinner(sq2) || !sq2.includes(null)) {
      statusHandler(sq2, humLet, compLet);
    }
  };

  useEffect(() => {
    if (rounds % 2 === 1) {
      computersStep(squares, 'O', 'X');
    }
  }, [rounds]);

  const handleClick = (i) => {
    if (!clickAllowed || squares[i]) {
      return;
    }

    const squares2 = squares.slice();
    dispatch(prohibitClick());
    let humLet;
    let compLet;
    if (rounds % 2 === 1) {
      compLet = 'X';
      humLet = 'O';
    } else {
      compLet = 'O';
      humLet = 'X';
    }

    dispatch(playerStep(i, humLet));
    squares2[i] = humLet;

    if (calculateWinner(squares2) || !squares2.includes(null)) {
      statusHandler(squares2, humLet, compLet);
      return;
    }

    computersStep(squares2, humLet, compLet);
    dispatch(allowClick());
  };

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      handleClick={() => {
        handleClick(i);
      }}
    />
  );

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
