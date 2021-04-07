import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../actions/gameAction';

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="play" type="submit" onClick={() => dispatch(resetGame())}>
        Play again
      </button>
    </div>
  );
};

export default Controls;
