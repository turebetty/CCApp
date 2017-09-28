import React, { Component, PropTypes } from 'react';

import {
  Text,
  View,
  StyleSheet,
  PixelRatio,
  Dimensions,
  Image
} from 'react-native';

const window = Dimensions.get('window');

let styles = StyleSheet.create({

});

// 此组件现阶段接受数组。有需求可以接受一张图片的string, 在render处改造
export default class AutoHeightImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aspectRatio: 1,
    }
  }
  componentWillMount(){
    const {data} = this.props;
    Image.getSize(data,(width,height) =>{
      let aspectRatio = height/ width;
      this.setState({
        aspectRatio: aspectRatio
      })
    });
  }
  render () {
    return (
      <View style={{alignSelf: 'stretch',paddingBottom: 6}}>
        <Image
          style={{width: this.props.width,height: this.state.aspectRatio*this.props.width}}
          source={{
          uri:this.props.data
        }}/>
      </View>
    )
  }
}

