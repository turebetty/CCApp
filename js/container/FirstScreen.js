import React from 'react';
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList
} from 'react-native';
import Fetch from '../utils/fetch';
import InventoryItem from '../component/InventoryItem';
import Tools from '../utils/tools';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  pg_inventory_items:{
    backgroundColor: '#fff',
  }
})
export default class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'first',
  };
  constructor(props) {
    super(props);
    this.state = {
      'object_list': [],
    };
    this.limit = 10;
    this.more = 0;
    this.next_start = 0;
  }
  componentDidMount () {
    this.fetchCategoryList();
  }


  /**
   * 获取商品列表
   */
  fetchCategoryList(){
    Fetch({
      url: `https://buy.duitang.com/napi/buy/inventory/list/by_datasource/?sort_by=&sort_type=desc&limit=${this.limit}&start=${this.next_start}&filter_id=inv_%E6%8A%A4%E8%82%A4&timestamp=1506509445000`,
      type: "GET",
    })
    .then(json => {
      let data = json.data;
      this.limit = data.limit;
      this.more = data.more;
      this.next_start = data.next_start;
      this.setState({
        'object_list': this.state.object_list.concat(data.object_list),
      });
    });
  }

  /**
   * render一个商品的item
   */
  _renderItem=({item})=>{
    const { navigate } = this.props.navigation;
    return <InventoryItem data={item} navigate = {navigate}/>
  }

  /**
   * 加载更多商品哦
   */
  _renderMore=()=>{
    this.fetchCategoryList();
  }
  render() {
    const { navigate } = this.props.navigation;
    this.state.object_list.map((rowItem,z) => {
      // 如果标签类型为图片并且不是png，进行缩略
      if(rowItem.tag_type===2&&!(/\.png$/).test(rowItem.tag_content)){
        rowItem.tag_content = Tools.dtImageTrans(rowItem.tag_content, true, 50, 50, 'c');
      }
    })
    return (
      <View>
        {this.state.object_list.length >0?<View style={[styles.pg_inventory_items]}>
          <FlatList
            numColumns ={2}   //两列
            columnWrapperStyle={{paddingLeft: 12}}
            data={this.state.object_list}  //整列的数据
            renderItem={this._renderItem}  //renderitem
            onEndReached={this._renderMore}  //拉到底部时加载更多
            onEndReachedThreshold = {0.5}  //提前加载，列表的一半时就开始加载
          />
        </View>:null}
      </View>
    );
  }
}



