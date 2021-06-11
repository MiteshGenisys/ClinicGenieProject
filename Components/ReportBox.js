import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

class ReportBox extends React.Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ReportBox;
