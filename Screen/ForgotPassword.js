import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class ForgotPassword extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.registrationText}>Forgot Password</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  registrationText: {
    // color: Color.textColor,
  },
});

export default ForgotPassword;
