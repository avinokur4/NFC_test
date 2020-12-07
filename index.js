import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation';

import createStore from './state';
import buildTheme from './styles';
import { name as appName } from './app.json';
import { Navigator, setTopLevelNavigator } from './routes';

const store = createStore();
const theme = buildTheme();

console.disableYellowBox = true;

class Application extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <Provider store={store} key="provider" theme={theme}>
        <Navigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Application);
