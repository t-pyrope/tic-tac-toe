const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinner = (squares) => {
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const computersTurnHandler = (sq1, humLet, compLet) => {
  const sq = [...sq1];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (sq[a] === compLet && sq[b] === compLet && sq[c] === null) {
      return c;
    }
    if (sq[a] === compLet && sq[c] === compLet && sq[b] === null) {
      return b;
    }
    if (sq[b] === compLet && sq[c] === compLet && sq[a] === null) {
      return a;
    }
    if (sq[a] === humLet && sq[b] === humLet && sq[c] === null) {
      return c;
    }
    if (sq[a] === humLet && sq[c] === humLet && sq[b] === null) {
      return b;
    }
    if (sq[b] === humLet && sq[c] === humLet && sq[a] === null) {
      return a;
    }
  }
  let random;
  while (!sq[random]) {
    random = Math.floor(Math.random() * sq.length);
    if (!sq[random]) {
      sq[random] = compLet;
      return random;
    }
    random = null;
  }
  return null;
};
