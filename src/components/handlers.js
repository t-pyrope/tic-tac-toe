export const calculateWinner = (squares) => {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const computersTurnHandler = (sq1) => {
  console.log('computer turn');
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
  const sq = [...sq1];
  console.log(`Original sq is ${sq}`);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sq[a] === 'O' && sq[b] === 'O' && sq[c] === null) {
      sq[c] = 'O';
      console.log(`var. 1: computer went to ${c}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
    if (sq[a] === 'O' && sq[c] === 'O' && sq[b] && null) {
      sq[b] = 'O';
      console.log(`var. 2: computer went to ${b}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
    if (sq[b] === 'O' && sq[c] === 'O' && sq[a] === null) {
      sq[a] = 'O';
      console.log(`var. 3: computer went to ${a}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
    if (sq[a] === 'X' && sq[b] === 'X' && sq[c] === null) {
      sq[c] = 'O';
      console.log(`var. 4: computer went to ${c}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
    if (sq[a] === 'X' && sq[c] === 'X' && sq[b] === null) {
      sq[b] = 'O';
      console.log(`var. 5: computer went to ${b}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
    if (sq[b] === 'X' && sq[c] === 'X' && sq[a] === null) {
      sq[a] = 'O';
      console.log(`var. 6: computer went to ${a}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
  }
  let random;
  while (!sq[random]) {
    random = Math.floor(Math.random() * sq.length);
    if (!sq[random]) {
      console.log(`this place should be empty ${sq[random]}`);
      sq[random] = 'O';
      console.log(`var. 7: computer went to ${random}`);
      console.log(`Sq is ${sq}`);
      return sq;
    }
  }
  console.log(`var. 8: computer went to nowhere: ${sq}`);
  return sq;
};
