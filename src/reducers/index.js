import { combineReducers } from 'redux-immutable';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
