import { NavigationActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = (navigatorRef) => { navigator = navigatorRef; };

const NavigationService = {
  dispatch: action => navigator.dispatch(action),

  navigate: (routeName, params) => navigator.dispatch(
    NavigationActions.navigate({ routeName, params }),
  ),

  setParams: params => navigator.dispatch(
    NavigationActions.setParams({ params }),
  ),
};

export {
  NavigationService,
  setTopLevelNavigator,
};
