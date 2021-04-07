const initState = {
  rounds: 0,
  alg: 0,
  human: 0,
  tie: 0,
};

const roundReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ROUND':
      return { ...state, rounds: state.rounds + 1 };
    case 'ADD_ALG_WINNER':
      return { ...state, alg: state.alg + 1 };
    case 'ADD_HUMAN_WINNER':
      return { ...state, human: state.human + 1 };
    case 'ADD_TIE':
      return { ...state, tie: state.tie + 1 };
    default:
      return { ...state };
  }
};

export default roundReducer;
