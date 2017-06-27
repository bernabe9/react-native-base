import { NavigationActions } from 'react-navigation';
import Immutable from 'immutable';

import { AppNavigator } from '../components/AppNavigator';

const {
  getActionForPathAndParams,
  getStateForAction
} = AppNavigator.router;

const initialNavState = Immutable.fromJS(getStateForAction(getActionForPathAndParams('Login')));

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main' })]
        }),
        state.toJS()
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
        }),
        state.toJS()
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state.toJS());
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState ? Immutable.fromJS(nextState) : state;
}

export default nav;
