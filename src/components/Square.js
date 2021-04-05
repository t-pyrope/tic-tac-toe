import React from 'react';
import PropTypes from 'prop-types';

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

Square.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Square.defaultProps = { value: null };
export default Square;
