import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable'
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  form
});

export default AppReducer;
