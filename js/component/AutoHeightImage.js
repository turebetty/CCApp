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
/**
 * react native 加载图片时，一定要知道图片宽高，
 * 本组件是用来根据图片宽度自动计算图片高度的。
 * @class AutoHeightImage
 * @extends {Component}
 * this.props{
 *   'data': 图片地址
 *   'width': 图片宽度
 * }
 */
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

