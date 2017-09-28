import React from 'react';
import {
  Alert,
  Button,
  View,
} from 'react-native';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'third',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to third's profile"
        onPress={() =>
          navigate('SubScreen', { name: 'third' })}
      />
    );
  }
}