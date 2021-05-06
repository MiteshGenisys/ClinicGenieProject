import React, {Component} from 'react';
import {Text, View, Button, TextInput, ScrollView} from 'react-native';
import Form, {TYPES} from 'react-native-basic-form';
import axios from 'axios';

export default class PersonList extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      last_name: '',
      mobile_number: '',
      email: '',
      clinic_name: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onsubmit = () => {
    const body = {
      first_name: this.state.fname, // in this first_name variable is as per define in backen side
      last_name: this.state.last_name,
      mobile_number: this.state.mobile_number,
      email: this.state.email,
      clinic_name: this.state.clinic_name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      pincode: this.state.pincode,
    };
    axios
      .post('https://devapi-clinicgenie.indiagenisys.com/inquiry', body)
      .then(res => {
        // console.log(res);
        console.warn(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <ScrollView>
        <View>
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="First name"
            onChangeText={text => {
              this.setState({fname: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Last email"
            onChangeText={text => {
              this.setState({last_name: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter Mobile Number"
            onChangeText={text => {
              this.setState({mobile_number: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter email"
            onChangeText={text => {
              this.setState({email: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter clinic name"
            onChangeText={text => {
              this.setState({clinic_name: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter address"
            onChangeText={text => {
              this.setState({address: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter city"
            onChangeText={text => {
              this.setState({city: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter state"
            onChangeText={text => {
              this.setState({state: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter country"
            onChangeText={text => {
              this.setState({country: text});
            }}
          />
          <TextInput
            style={{borderWidth: 2, borderRightColor: 'skyblue', margin: 20}}
            placeholder="Enter pincode"
            onChangeText={text => {
              this.setState({pincode: text});
            }}
          />

          <Button onPress={this.onsubmit} title="Post Data" />
          <Text>{this.state.text}</Text>
        </View>
      </ScrollView>
    );
  }
}
