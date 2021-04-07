const initState = {
  squares: [null, null, null, null, null, null, null, null, null],
  clickAllowed: true,
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLAYER_STEP':
      return {
        ...state,
        squares: state.squares.map((square, i) => (i === action.payload.index
          ? action.payload.letter : square)),
      };
    case 'RESET_GAME':
      return {
        ...state,
        squares: [null, null, null, null, null, null, null, null, null],
        clickAllowed: true,
      };
    case 'ALLOW_CLICK':
      return {
        ...state,
        clickAllowed: true,
      };
    case 'PROHIBIT_CLICK':
      return {
        ...state,
        clickAllowed: false,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
