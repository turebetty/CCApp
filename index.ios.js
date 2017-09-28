import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './js/container/MainScreen';
import SubScreen from './js/container/SubScreen';

export default CCApp = StackNavigator({
  MainScreen: { screen: MainScreen },
  SubScreen: {screen: SubScreen},
});

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('CCApp', () => CCApp);