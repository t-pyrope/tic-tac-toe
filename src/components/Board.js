import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner, computersTurnHandler } from './handlers';

const Board = () => {
  const [allowClick, setAllowClick] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [status, setStatus] = useState('\u00A0');

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      handleClick={() => {
        handleClick(i);
      }}
    />
  );

  const handleClick = (i) => {
    // если игра уже закончена или в квадратике что-то есть, выйти из функции
    if (!allowClick || isFinished || squares[i]) {
      return;
    }
    // создать копию переменной состояния
    let squares2 = squares.slice();
    setAllowClick(false);
    // дать квадратику, куда нажал пользователь, имя Х в копии
    squares2[i] = 'X';

    // если есть победитель или нет пустых полей
    if (calculateWinner(squares2) || !squares2.includes(null)) {
      // установим ход игрока в переменную состояния завершим игру
      setSquares(squares2);
      setIsFinished(true);
      statusHandler(squares2);
      return;
    }
    // в противном случае передадим ход компьютеру
    squares2 = computersTurnHandler(squares2);
    // если после хода компьютера есть победитель или нет пустых полей, завершим игру
    if (calculateWinner(squares2) || !squares2.includes(null)) {
      // установим сделанные ходы в переменную состояния и завершим игру
      setSquares(squares2);
      setIsFinished(true);
      statusHandler(squares2);
      return;
    }
    // если нет победителя и есть пустые поля, просто установим ходы в переменную состояния
    setSquares(squares2);
    setAllowClick(true);
  };

  const statusHandler = (sq) => {
    const winner = calculateWinner(sq);
    if (winner === 'X') {
      console.log('A human won');
      setStatus('A human won');
    }
    if (winner === 'O') {
      console.log('An algorithm won');
      setStatus('An algorithm won');
    }
    if (!winner && isFinished) {
      setStatus('Equal intelligence');
    }
  };

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
