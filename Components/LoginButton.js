import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class LoginButton extends Component {
  render() {
    return (
      <View style={styles.loginView}>
        <Text style={styles.loginText}>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {},
  loginText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginButton;
