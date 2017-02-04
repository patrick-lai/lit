import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ListView
} from 'react-native';
import _ from 'lodash';

// Components
import Drawer from 'react-native-drawer';
import DiscoverScene from './src/Scenes/DiscoverScene';
import MyItemsScene from './src/Scenes/MyItemsScene';
import Icon from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './src/styles';

// Cant change name of app for some reason
class lit extends Component {

  constructor(){
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      savedItems : [],
      dataSource: ds.cloneWithRows([]),
      drawerOpen : false
    }
  }

  handleMenu(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  addItem(item){

    const slimItem = _.pick(item,[
      'DesignerName',
      'Description',
      'ProductId',
      'ImageMain',
      'ProductId',
      'PriceDisplay',
      'ProductUrl'
    ]);

    var newSavedItems = this.state.savedItems;
    newSavedItems.push(slimItem);

    this.setState({
      savedItems: newSavedItems,
      dataSource: this.state.dataSource.cloneWithRows(newSavedItems)
    });
  }

  render() {

    return (
      <View style={styles.app}>
        <Drawer
        type="static"
        content={<MyItemsScene dataSource={this.state.dataSource}/>}
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
        open={this.state.drawerOpen}
        >
          <Icon name="ios-menu" size={35} color='#444' style={styles.menuIcon} onPress={this.handleMenu.bind(this)}/>
          <DiscoverScene
            addItem={this.addItem.bind(this)}
            handleMenu={this.handleMenu.bind(this)}
          />
        </Drawer>
      </View>
    );
  }
}

// What is this?
AppRegistry.registerComponent('lit', () => lit);

export default lit;
