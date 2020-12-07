import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { Image } from 'react-native';
import { NavigationService as NS, setTopLevelNavigator as sTLN } from './components';
import Home from '../pages/home'
import Profile from '../pages/profile'
import Settings from '../pages/settings'

import styles from './styles';

const Navigator = createAppContainer(
  createSwitchNavigator({
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Image
          source={Orders}
          style={{ ...styles.icon, tintColor }}
        />,
      }),
    },
    ProductNotAuth: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Image
          source={Profile}
          style={{ ...styles.icon, tintColor }}
        />,
      }),
    },
    ProductAuth: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Image
          source={Settings}
          style={{ ...styles.icon, tintColor }}
        />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  }),
);

// this fixes HMR issue, see https://github.com/facebook/react-native/issues/22592
const NavigationService = NS;
const setTopLevelNavigator = sTLN;

export {
  Navigator,
  NavigationService,
  setTopLevelNavigator,
};
