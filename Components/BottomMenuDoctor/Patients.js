import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Patients extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Patients Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Patients;
