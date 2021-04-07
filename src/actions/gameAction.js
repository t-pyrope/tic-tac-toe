export const playerStep = (index, letter) => ({
  type: 'PLAYER_STEP',
  payload: {
    index, letter,
  },
});

export const resetGame = () => ({
  type: 'RESET_GAME',
});

export const prohibitClick = () => ({
  type: 'PROHIBIT_CLICK',
});

export const allowClick = () => ({
  type: 'ALLOW_CLICK',
});

export const algWinner = () => ({
  type: 'ALG_WINNER',
});

export const humanWinner = () => ({
  type: 'HUMAN_WINNER',
});

export const noWinner = () => ({
  type: 'NO_WINNER',
});
