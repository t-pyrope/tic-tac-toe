import React from 'react';
import { useSelector } from 'react-redux';

const Statistics = () => {
  const { alg, human, tie } = useSelector((state) => state.round);
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <div className="statistics-items">
        <p>
          <b>Algorithm:</b> {alg}
        </p>
        <p>
          <b>Human:</b> {human}
        </p>
        <p>
          <b>Tie:</b> {tie}
        </p>
      </div>
    </div>
  );
};
export default Statistics;
