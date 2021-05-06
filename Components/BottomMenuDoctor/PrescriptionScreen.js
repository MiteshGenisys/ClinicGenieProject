import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class PrescriptionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PrescriptionScreen Screen</Text>
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

export default PrescriptionScreen;
