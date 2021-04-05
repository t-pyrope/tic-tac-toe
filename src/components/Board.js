import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner, computersTurnHandler } from './handlers';

const Board = () => {
  const [allowClick, setAllowClick] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [status, setStatus] = useState('\u00A0');

  const statusHandler = (sq) => {
    const winner = calculateWinner(sq);
    if (winner === 'X') {
      setStatus('A human won');
    }
    if (winner === 'O') {
      setStatus('An algorithm won');
    }
    if (!winner) {
      setStatus('Equal intelligence');
    }
  };

  const handleClick = (i) => {
    if (!allowClick || squares[i]) {
      return;
    }
    let squares2 = squares.slice();
    setAllowClick(false);
    squares2[i] = 'X';

    if (calculateWinner(squares2) || !squares2.includes(null)) {
      setSquares(squares2);
      statusHandler(squares2);
      return;
    }
    squares2 = computersTurnHandler(squares2);
    if (calculateWinner(squares2) || !squares2.includes(null)) {
      setSquares(squares2);
      statusHandler(squares2);
      return;
    }
    setSquares(squares2);
    setAllowClick(true);
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
