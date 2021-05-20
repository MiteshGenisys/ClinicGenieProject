import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import data from '../data/data';
import Patient from '../Screen/Patient';

class Patientlist extends React.Component {
  state = {
    data: data,
  };

  patientlist = () => {
    return this.state.data.map(data => {
      return <Patient detail={data} key={data.id} />;
    });
  };

  render() {
    return (
      <ScrollView
        style={styles.patientContainer}
        showsVerticalScrollIndicator={false}>
        {this.patientlist()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  patientContainer: {
    flex: 1,
  },
});

export default Patientlist;
