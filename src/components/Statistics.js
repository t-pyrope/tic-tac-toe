import React from 'react';
import { useSelector } from 'react-redux';

const Statistics = () => {
  const { alg, human, tie } = useSelector((state) => state.round);
  return (
    <div>
      <h3>Statistics</h3>
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
  );
};
export default Statistics;
