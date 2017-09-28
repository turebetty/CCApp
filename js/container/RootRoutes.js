import React from 'react';
import {
  Alert,
  Button,
  View,
} from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('SecondScreen', { name: 'Jane' })}
      />
    );
  }
}