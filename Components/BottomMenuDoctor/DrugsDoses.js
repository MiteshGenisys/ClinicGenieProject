import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class DrugsDoses extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Drugs and Doses</Text>
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

export default DrugsDoses;
