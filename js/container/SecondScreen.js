import React from 'react';
import {
  Alert,
  Button,
  View,
} from 'react-native';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'second',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to second's profile"
        onPress={() =>
          navigate('SubScreen', { name: 'second' })}
      />
    );
  }
}