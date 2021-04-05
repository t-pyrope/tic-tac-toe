import React from 'react';
import Board from './Board';

const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info" />
  </div>
);

export default Game;
