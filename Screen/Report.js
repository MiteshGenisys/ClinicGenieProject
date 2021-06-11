import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

import Color from '../constant/Colors';
import {add_report} from '../Services/AuthService';

class Report extends React.Component {
  constructor() {
    super();
    this.state = {
      reports: [
        {
          report_type: '',
          result: '',
          description: '',
        },
      ],
    };
  }

  addMorereport = () => {
    const {reports} = this.state;
    reports.push({
      report_type: '',
      result: '',
      description: '',
    });
    this.setState({reports});
  };

  onChangereporttype = (text, index) => {
    const {reports} = this.state;
    reports[index]['report_type'] = text;
    this.setState({reports});
  };

  result = (text, index) => {
    const {reports} = this.state;
    reports[index]['result'] = text;
    this.setState({reports});
  };

  description = (text, index) => {
    const {reports} = this.state;
    reports[index]['description'] = text;
    this.setState({reports});
  };

  onsubmit = () => {
    const id = this.props.route.params.id;
    console.log(id);

    const body = {
      reports: this.state.reports,
    };
    add_report(id, body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titletext}>Report List</Text>
          </View>
        </View>
        <ScrollView>
          {this.state.reports.map((item, index) => (
            <View>
              <TextInput
                name="report_type"
                style={styles.textInput}
                placeholder="Enter report type"
                // defaultValue={item.report_type}
                onChangeText={text => this.onChangereporttype(text, index)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter description"
                onChangeText={text => this.result(text, index)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter result"
                onChangeText={text => this.description(text, index)}
              />
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <View>
              <Button title="Add more" onPress={this.addMorereport} />
            </View>
            <View>
              <Button title="submit" onPress={this.onsubmit} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    backgroundColor: '#EAF2FB',
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
  textInput: {
    marginTop: 25,
    padding: 12,
    paddingLeft: 13,
    width: '100%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default Report;
