import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './Redux/Store/Index';

import Routes from './Navigator/Routes';
import MyClass from './Components/Pagination';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <Routes />
          {/* <MyClass /> */}
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
