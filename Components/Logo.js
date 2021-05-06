import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {},
});

export default Logo;
