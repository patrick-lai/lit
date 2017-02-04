import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

class NoMoreCards extends Component {

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }

}

export default NoMoreCards;
