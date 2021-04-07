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

export const computersTurnHandler = (sq1) => {
  const sq = [...sq1];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (sq[a] === 'O' && sq[b] === 'O' && sq[c] === null) {
      sq[c] = 'O';
      return c;
    }
    if (sq[a] === 'O' && sq[c] === 'O' && sq[b] === null) {
      sq[b] = 'O';
      return b;
    }
    if (sq[b] === 'O' && sq[c] === 'O' && sq[a] === null) {
      sq[a] = 'O';
      return a;
    }
    if (sq[a] === 'X' && sq[b] === 'X' && sq[c] === null) {
      sq[c] = 'O';
      return c;
    }
    if (sq[a] === 'X' && sq[c] === 'X' && sq[b] === null) {
      sq[b] = 'O';
      return b;
    }
    if (sq[b] === 'X' && sq[c] === 'X' && sq[a] === null) {
      sq[a] = 'O';
      return a;
    }
  }
  let random;
  while (!sq[random]) {
    random = Math.floor(Math.random() * sq.length);
    if (!sq[random]) {
      sq[random] = 'O';
      return random;
    }
    random = null;
  }
  return null;
};
