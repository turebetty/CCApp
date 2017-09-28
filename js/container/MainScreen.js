import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import {
  Alert,
  Button,
  View,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  tabBarIcon: {
    height: 30,
    width: 30,
  }
})

export default MainScreen = TabNavigator({
  FirstScreen: { screen: FirstScreen, navigationOptions:{
    tabBarLabel: 'first',
    tabBarIcon: ({ tintColor, focused}) => (
      <Image
        source={focused ?require('../../img/first-light.png'):require('../../img/first.png')}
        style={[styles.tabBarIcon]}
      />
    ),
  }},
  SecondScreen: { screen: SecondScreen, navigationOptions:{
    tabBarLabel: 'second',
    tabBarIcon: ({ tintColor, focused}) => (
      <Image
        source={focused ?require('../../img/second-light.png'):require('../../img/second.png')}
        style={[styles.tabBarIcon]}
      />
    )
  } },
  ThirdScreen: { screen: ThirdScreen, navigationOptions:{
    tabBarLabel: 'third',
    tabBarIcon: ({ tintColor, focused}) => (
      <Image
        source={focused ?require('../../img/third-light.png'):require('../../img/third.png')}
        style={[styles.tabBarIcon]}
      />
    )
  } },
  FourthScreen: { screen: FourthScreen, navigationOptions:{
    tabBarLabel: 'fourth',
    tabBarIcon: ({ tintColor, focused}) => (
      <Image
        source={focused ?require('../../img/fourth-light.png'):require('../../img/fourth.png')}
        style={[styles.tabBarIcon]}
      />
    )
  } },
},
{
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    inactiveTintColor: '#aaa',
    labelStyle:{
      fontSize: 12,
    }
  }

});