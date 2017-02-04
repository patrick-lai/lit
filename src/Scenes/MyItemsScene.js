import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Linking, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles';

class MyItemScene extends Component {

  goToUrl(url){
    Linking.openURL('https://www.farfetch.com'+url);
  }

  _imageResize(url, width){
    // Lazy replace
    return url.replace('_255.jpg', `_${width}.jpg`);
  }

  render() {

    const pageStyles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 20,
      },
      row:{
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
      }
    });

    if(!this.props.dataSource) {
      return null;
    }

    return (
      <View style={styles.container}>
        <ListView
          style={styles.listContainer}
          dataSource={this.props.dataSource}
          renderRow={
            (item) => <View style={pageStyles.container}>
              <Image style={pageStyles.image} source={{uri: this._imageResize(item.ImageMain, 80)}} />
              <Text style={pageStyles.row}>
               {item.DesignerName} - {item.Description} - <Icon name="ios-link" size={15} color='#444' onPress={() => this.goToUrl(item.ProductUrl)}/>
              </Text>
            </View>
          }
        />
      </View>
    )
  }
}

export default MyItemScene;
