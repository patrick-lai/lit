import React, { Component } from 'react';
import { Text, View, Image, Linking, Button } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import Card from '../Card';
import NoMoreCards from '../NoMoreCards';
import { fetchClothing } from '../FarfetchApi';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles';

class DiscoverScene extends Component {

  constructor(props){
    super(props);

    this.state = {
      cards : [],
      outOfCards: false,
      gender: 'women',
      page: '1'
    }

  }

  componentWillMount(){

    fetchClothing(this.state.gender, this.state.page).then(res => {
      // Make products our card
      this.setState({
        cards : res.Products.List,
        menuOpen: false
      });
    });
  }

  handleYup (item) {
    this.props.addItem(item);
  }

  handleNope (card) {
    console.log("passed")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {

    return (
      <View style={styles.container}>
        <SwipeCards style={styles.card}
          cards={this.state.cards}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

          handleYup={this.handleYup.bind(this)}
          handleNope={this.handleNope}
        />
      </View>
    )
  }
}

export default DiscoverScene;
