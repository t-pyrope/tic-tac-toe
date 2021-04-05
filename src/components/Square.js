import React from 'react';

const Square = ({ value, handleClick }) => (
  <button
    type="submit"
    className="square"
    onClick={() => {
      handleClick(value);
    }}
  >
    {value}
  </button>
);

export default Square;
