import React from 'react';
import {
  Alert,
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  SectionList,
  Dimensions,
} from 'react-native';
import Fetch from '../utils/fetch';
import AutoHeightImage from '../component/AutoHeightImage';

const styles = StyleSheet.create({
  pg_inventory:{
    backgroundColor: '#fff',
    paddingTop: 12,
  },
  pg_inventory_text:{
    fontSize: 14,
    paddingTop: 8,
    paddingRight: 24,
    paddingBottom: 8,
    paddingLeft: 8,
    color: '#777'
  },
  pg_inventory_image:{
    backgroundColor: '#fff',
  },
  line: {
    marginLeft: 12,
    height:1/PixelRatio.get(),
    backgroundColor:'rgba(0,0,0,0.18)',
  }
})
const window = Dimensions.get('window');
export default class SubScreen extends React.Component {
  static navigationOptions = {
    title: 'sub',
  };
  constructor(props) {
    super(props);
    this.state = {
      'detail_desc': [],
      'inventory_attr': [],
    };
  }
  componentDidMount () {
    this.fetchInventoryDetail();
  }
  fetchInventoryDetail(){
    const { params } = this.props.navigation.state;
    Fetch({
      url: `https://buy.duitang.com/napi/buy/spu/detail/?inventory_id=${params.id}`,
      type: "GET",
    })
    .then(json => {
      let inventoryDetail = json.data;
      if(inventoryDetail.inventory_attr  && inventoryDetail.inventory_attr!='' && inventoryDetail.inventory_attr.indexOf('/n')>-1){
        inventoryDetail.inventory_attr = inventoryDetail.inventory_attr.split('/n');
      }else if(inventoryDetail.inventory_attr  && inventoryDetail.inventory_attr!='' ) {
        inventoryDetail.inventory_attr = inventoryDetail.inventory_attr.split('\n');
      }
      this.setState({
        detail_desc: inventoryDetail.detail_desc,
        inventory_attr: inventoryDetail.inventory_attr,
      });
    });
  }
  _renderTextItem(attr){
    return <View>
      <Text style={[styles.pg_inventory_text]}>{attr.item}</Text>
      <View style={[styles.line]}></View>
    </View>
  }
  /**
   * 获取key
   */
  _getTextKey(item,index){
    return `text${index.toString()}`;
  }
  /**
   * 获取key
   */
  _getImageKey(item,index){
    return `img${index.toString()}`;
  }
  _renderImageItem(url){
    return <AutoHeightImage style={[styles.pg_inventory_image]} data={url.item} width = {window.width}/>
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={[styles.pg_inventory]}>
        <SectionList
          sections={[ // 不同section渲染不同类型的子组件
            {data: this.state.inventory_attr, key: 'text',keyExtractor: this._getTextKey, renderItem: this._renderTextItem},
            {data: this.state.detail_desc, key: 'image',keyExtractor: this._getImageKey, renderItem: this._renderImageItem}
          ]}
        />
      </View>
    );
  }
}
