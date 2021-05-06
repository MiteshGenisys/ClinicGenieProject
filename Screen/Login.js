import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Logo from '../Components/Logo';
import Input from '../Components/Input';
import Links from '../Components/Link';
import LoginButton from '../Components/LoginButton';
import Color from '../constant/Colors';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.inputVIew}>
          <Input />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    marginTop: 10,
  },
  inputVIew: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
