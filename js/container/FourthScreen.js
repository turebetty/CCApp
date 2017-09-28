import React from 'react';
import {
  Alert,
  Button,
  View,
} from 'react-native';

export default class FourthScreen extends React.Component {
  static navigationOptions = {
    title: 'fourth',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to fourth's profile"
        onPress={() =>
          navigate('SubScreen', { name: 'fourth' })}
      />
    );
  }
}