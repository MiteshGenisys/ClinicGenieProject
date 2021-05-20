import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Patient extends React.Component {
  render() {
    return (
      <View style={styles.patientBox}>
        <View style={styles.nameContainer}>
          <Text style={styles.pname}>{this.props.detail.username}</Text>
        </View>
        <View style={styles.patientdetailContainer}>
          <Text> {this.props.detail.contact} </Text>
          <Text> {this.props.detail.age} </Text>
          <Text> {this.props.detail.gender} </Text>
        </View>
        <View>
          <Text> {this.props.detail.lastconsult} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  patientBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 5,
    marginTop: 15,
    shadowOpacity: 0.26,
    shadowOffset: {width: 80, height: 10},
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pname: {
    textAlign: 'right',
    fontSize: 23,
  },
  patientdetailContainer: {
    flexDirection: 'row',
  },
});

export default Patient;
