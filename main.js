import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Header } from './src/components/common';
import CardList from './src/components/CardList';
import CardDetail from  './src/components/CardDetail';
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header userName='Home'/>
        {/*<CardList />*/}
        <CardDetail />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#275B00',
    flex: 1,

  /*

    alignItems: 'center',
    justifyContent: 'center',*/
  },
});

Exponent.registerRootComponent(App);
