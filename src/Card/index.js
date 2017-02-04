import React, { Component } from 'react';
import { Text, View, Image, Linking, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Cards extends Component {

  _goToUrl(url){
    Linking.openURL('https://www.farfetch.com'+url);
  }

  _imageResize(url, width){
    // Lazy replace
    return url.replace('_255.jpg', `_${width}.jpg`);
  }

  render() {

    const { ImageMain, DesignerName, PriceDisplay, Description, ProductUrl } = this.props;
    const newImageUrl = this._imageResize(ImageMain, 500);

    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: newImageUrl}} />
        <View style={styles.info}>
          <Text style={styles.text}>
            {DesignerName}{"\n"}
            {Description}{"\n"}
            {PriceDisplay}{"\n"}
            {420} <Icon style={styles.text} name="heart-o" size={30} />
          </Text>
        </View>
      </View>
    )
  }
}

export default Cards;
