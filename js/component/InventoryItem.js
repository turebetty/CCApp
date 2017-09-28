import React from 'react';
import {
  Alert,
  Button,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  h18:{
    height: 18,
  },
	cp_inventory_item:{
    paddingRight: 12,
    width: window.width/2,
	},
	line: {
    height:1/PixelRatio.get(),
    backgroundColor:'rgba(0,0,0,0.18)',
    width: '50%',
    marginLeft: '25%',
  },
  cp_inventory_item_img: {
    width: window.width/2 - 12*1.5,
    height: window.width/2 - 12*1.5,
  },
	cp_inventory_item_caption:{
    marginTop: 12,
    fontSize: 13,
    lineHeight: 15,
    fontWeight: 'bold',
    color: '#444',
    height: 15,
	},
	cp_inventory_item_name:{
    marginTop: 4,
    fontSize: 13,
    lineHeight: 15,
    color: '#aaa',
    height: 30,
	},
	cp_inventory_item_count:{
    marginTop: 18,
    fontSize: 11,
    lineHeight: 15,
    color: '#aaa',
	},
	cp_inventory_question_answer:{
		marginTop: 8,
		color: '#777',
		fontSize: 13,
		lineHeight: 21,
  },
  cp_inventory_item_sale:{
    marginTop: 4,
    fontSize: 13,
    lineHeight: 21,
    color: '#ff5959'
  }
})

export default class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { data,navigate } = this.props;
    return (
      <View style={[styles.cp_inventory_item]} key={data.id}>
          <View style={[styles.h18]}></View>
          <TouchableOpacity onPress={() =>navigate('SubScreen', { id: data.id })}>
            <Image style={[styles.cp_inventory_item_img]} source={{uri: data.pictures[0]}}/>
            <View style={[styles.cp_inventory_item_intro]}>
              <Text style={[styles.cp_inventory_item_caption]}>{data.inventory_caption}</Text>
              <Text style={[styles.cp_inventory_item_name]}>{data.inventory_name}</Text>
              <Text style={[styles.cp_inventory_item_count]}>已售&nbsp;{data.sold_quantity}</Text>
              <Text style={[styles.cp_inventory_item_sale]}>¥{data.sale_price} </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.h18]}></View>
          <View style={[styles.line]}></View>
      </View>
    )
  }
}


