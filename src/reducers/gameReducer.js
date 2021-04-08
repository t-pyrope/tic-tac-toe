const initState = {
  squares: [null, null, null, null, null, null, null, null, null],
  clickAllowed: true,
  status: 'Make a Move',
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
        status: 'Make a Move',
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
    case 'ALG_WINNER':
      return {
        ...state,
        status: 'The Algorithm Won',
      };
    case 'HUMAN_WINNER':
      return {
        ...state,
        status: 'The Human Won',
      };
    case 'NO_WINNER':
      return {
        ...state,
        status: 'Equal intelligence',
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
