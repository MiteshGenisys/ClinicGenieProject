import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
} from 'react-native';

import {auth_patient} from '../Services/AuthService';

class Patientlist extends Component {
  onsubmmit = () => {
    auth_patient()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.forgotContainer}>
        <TouchableOpacity style={styles.button} onPress={this.onsubmmit}>
          <Text style={styles.text}>Get patient delais</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forgotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 50,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    paddingTop: 10,
    textAlign: 'center',
  },
});

export default Patientlist;
