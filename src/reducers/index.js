import { combineReducers } from 'redux';
import roundReducer from './roundReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  round: roundReducer,
  game: gameReducer,
});

export default rootReducer;
