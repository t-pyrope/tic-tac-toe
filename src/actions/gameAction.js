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
