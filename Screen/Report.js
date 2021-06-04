import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

import Color from '../constant/Colors';

class Report extends React.Component {
  render() {
    return (
      <View style={styles.reportView}>
        <View style={styles.titleContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titletext}>Report List</Text>
          </View>
          <View style={styles.buttonView}>
            <Button title="Add Report" onPress={this.add_consultation} />
          </View>
        </View>
        <ScrollView style={styles.reportContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              name="email"
              placeholder="Email report type"
            />
            <TextInput
              style={styles.textInput}
              name="email"
              placeholder="Email Description"
            />
            <TextInput
              style={styles.textInput}
              name="email"
              placeholder="Enter result"
            />
          </View>
          <View style={styles.add_submit_button}>
            <View>
              <Button title="add report" />
            </View>
            <View>
              <Button title="submit" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reportView: {
    height: '100%',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
  },
  titleView: {
    marginTop: 7,
  },
  titletext: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    marginLeft: 5,
  },
  buttonView: {
    justifyContent: 'center',
    margin: 7,
    marginRight: 10,
  },
  reportContainer: {
    // backgroundColor: 'white',
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
  },
  add_submit_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  textInput: {
    marginTop: 25,
    padding: 12,
    width: '80%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Report;
