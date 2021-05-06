import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Routes from './Navigator/Routes';
import TabNavigator from './Navigator/TabNavigator';
import PersonList from './Components/PersonList';

class App extends Component {
  render() {
    return <Routes />;
    // return <PersonList />;
    // return <TabNavigator />;
  }
}

const styles = StyleSheet.create({});

export default App;
