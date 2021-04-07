/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Square from './Square';
import { calculateWinner, computersTurnHandler } from './handlers';
import { addAlgWinner, addHumanWinner, addTie } from '../actions/roundAction';
import {
  playerStep, prohibitClick, allowClick, algWinner, humanWinner, noWinner,
} from '../actions/gameAction';

const Board = () => {
  const dispatch = useDispatch();

  const { squares, clickAllowed, status } = useSelector((state) => state.game);

  const statusHandler = (sq) => {
    const winner = calculateWinner(sq);
    if (winner === 'X') {
      dispatch(humanWinner());
      dispatch(addHumanWinner());
    }
    if (winner === 'O') {
      dispatch(algWinner());
      dispatch(addAlgWinner());
    }
    if (!winner) {
      dispatch(noWinner());
      dispatch(addTie());
    }
    console.log(status);
  };

  const handleClick = (i) => {
    if (!clickAllowed || squares[i]) {
      return;
    }
    const squares2 = squares.slice();
    dispatch(prohibitClick());
    dispatch(playerStep(i, 'X'));
    squares2[i] = 'X';

    if (calculateWinner(squares2) || !squares2.includes(null)) {
      statusHandler(squares2);
      return;
    }

    const compI = computersTurnHandler(squares2);
    dispatch(playerStep(compI, 'O'));
    if (calculateWinner(squares2) || !squares2.includes(null)) {
      statusHandler(squares2);
      return;
    }
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
