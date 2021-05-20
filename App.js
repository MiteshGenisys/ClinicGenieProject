import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './Navigator/Routes';
import configureStore from './Redux/Store/Index';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
