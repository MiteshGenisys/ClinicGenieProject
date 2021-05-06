import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Color from '../constant/Colors';

export default class Links extends Component<{}> {
  request_registration() {
    Actions.request_registration();
  }
  forgot() {
    Actions.forgot();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signupTextCont}>
          <TouchableOpacity onPress={this.request_registration}>
            <Text style={styles.registrationText}>Request registration</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotTextCont}>
          <TouchableOpacity onPress={this.forgot}>
            <Text style={styles.forgotText}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  registrationText: {
    color: Color.textColor,
  },
  forgotText: {
    color: Color.textColor,
  },
});
