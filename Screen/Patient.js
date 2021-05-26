import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Actions} from 'react-native-router-flux';

import Patientlist from '../Screen/Patientlist';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Addpatient from '../Screen/Addpatient';
import Color from '../constant/Colors';

const Stack = createStackNavigator();
class Patient extends React.Component {
  addpatient() {
    Actions.addpatient();
  }

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          title: 'Patient list',
        }}>
        <Stack.Screen
          name="Home"
          component={Patientlist}
          options={{
            headerRight: () => (
              <TouchableOpacity style={styles.btn}>
                <Button onPress={this.addpatient} title="add patient" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginRight: 20,
  },
});

export default Patient;
