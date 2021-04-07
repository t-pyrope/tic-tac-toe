import React from 'react';
import Board from './Board';
import Controls from './Controls';
import Statistics from './Statistics';

const Game = () => (
  <div className="game">
    <h1>Win artificial intelligence</h1>
    <Board />
    <Controls />
    <Statistics />
    <div className="game-info" />
  </div>
);

export default Game;
