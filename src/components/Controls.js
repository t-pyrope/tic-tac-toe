import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../actions/gameAction';
import { addRound } from '../actions/roundAction';

const Controls = () => {
  const dispatch = useDispatch();
  const playAgainHandler = () => {
    dispatch(resetGame());
    dispatch(addRound());
  };
  return (
    <div>
      <button className="play" type="submit" onClick={playAgainHandler}>
        Play again
      </button>
    </div>
  );
};

export default Controls;
