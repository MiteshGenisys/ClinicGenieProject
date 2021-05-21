import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class Patient extends React.Component {
  render() {
    return (
      <View style={styles.patientBox}>
        <View style={styles.nameContainer}>
          <Text style={styles.pname}>{this.props.detail.username}</Text>
        </View>
        <View style={styles.patientdetailContainer}>
          <View style={styles.contactage}>
            <Text> {this.props.detail.contact} </Text>
            <Text> {this.props.detail.age} </Text>
            <Text> {this.props.detail.gender} </Text>
          </View>
          <View style={styles.editdelete}>
            <TouchableOpacity>
              <FontAwesome style={styles.icon} name="pen" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="trash-alt" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lastconsult}>
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pname: {
    textAlign: 'right',
    fontSize: 23,
  },
  patientdetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  editdelete: {
    flexDirection: 'row',
  },
  contactage: {
    flexDirection: 'row',
  },
  lastconsult: {
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    marginRight: 13,
  },
});

export default Patient;
