import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  View,Alert
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';
import {RadioButton} from 'react-native-paper';
import moment from 'moment';

import Color from '../constant/Colors';
import {get_patient, edit_patients} from '../Services/AuthService';

class Editprofile extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      mobile_number: '',
      email: '',
      checked: '',
      marital_status: '',
      contact_method: '',
      spouse_partner_name: '',
      date_of_birth: '',
      anniversary_date: '',
      personal_notes: '',
    };
  }

  componentDidMount = () => {
    this.getpatientlist();
  };

  getpatientlist = () => {
    const id = this.props.route.params.data._id;

    get_patient(id)
      .then(res => {
        console.log(res.data.date_of_birth);
        const data = res.data;
        this.setState({
          first_name: data.first_name,
          last_name: data.last_name,
          mobile_number: data.mobile_number,
          email: data.email,
          checked: data.checked,
          marital_status: data.marital_status,
          contact_method: data.contact_method,
          spouse_partner_name: data.spouse_partner_name,
          date_of_birth: data.date_of_birth,
          anniversary_date: data.anniversary_date,
          personal_notes: data.personal_notes,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onsubmit = async () => {
    const id = this.props.route.params.data._id;

    const body = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      mobile_number: this.state.mobile_number,
      contact_method: this.state.contact_method,
      gender: this.state.checked,
      date_of_birth: moment(this.state.date_of_birth).format('DD-MM-YYYY'),
      marital_status: this.state.marital_status,
      anniversary_date: moment(this.state.anniversary_date).format(
        'DD-MM-YYYY',
      ),
      personal_notes: this.state.personal_notes,
      spouse_partner_name: this.state.spouse_partner_name,
    };
    edit_patients(id, body)
      .then(res => {
        console.log(res);
        Alert.alert('Patient updated..')
        this.props.navigation.navigate('dasbord');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.state.data);
    const {checked} = this.state;
    return (
      <ScrollView style={styles.addpatientContainer}>
        <Text>General information</Text>
        <TextInput
          style={styles.inputText}
          defaultValue={this.state.first_name}
          placeholder="Enter first name"
          name="first_name"
          onChangeText={text => {
            this.setState({first_name: text});
          }}
        />
        <TextInput
          style={styles.inputText}
          defaultValue={this.state.last_name}
          placeholder="Enter last name"
          name="last_name"
          onChangeText={text => {
            this.setState({last_name: text});
          }}
        />
        <TextInput
          style={styles.inputText}
          defaultValue={this.state.mobile_number}
          placeholder="Mobilenumber"
          name="mobile_number"
          onChangeText={text => {
            this.setState({mobile_number: text});
          }}
        />
        <TextInput
          style={styles.inputText}
          defaultValue={this.state.email}
          placeholder="Enter email"
          name="email"
          onChangeText={text => {
            this.setState({email: text});
          }}
        />
        <View style={styles.radionbtnContainer}>
          <Text style={styles.malefemale}>Gender</Text>
          <RadioButton
            value="male"
            status={checked === 'male' ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 'male'});
            }}
          />
          <Text style={styles.malefemale}>Male</Text>

          <RadioButton
            value="female"
            status={checked === 'female' ? 'checked' : 'unchecked'}
            onPress={() => {
              this.setState({checked: 'female'});
            }}
          />
          <Text style={styles.malefemale}>Female</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.marital_status} // marital statush featching value in edit profile is panding
            style={{height: 50, width: '100%'}}
            onValueChange={(text, itemIndex) =>
              this.setState({marital_status: text})
            }>
            <Picker.Item label="Select Marital Statush" value="" />
            <Picker.Item label="married" value="married" />
            <Picker.Item label="single" value="single" />
          </Picker>
        </View>
        <Text>Personal information</Text>
        <TextInput
          style={styles.inputText}
          defaultValue={this.state.contact_method}
          placeholder="contact"
          name="contact_method"
          onChangeText={text => {
            this.setState({contact_method: text});
          }}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Spoise/Partner name "
          defaultValue={this.state.spouse_partner_name}
          name="spouse_partner_name"
          onChangeText={text => {
            this.setState({spouse_partner_name: text});
          }}
        />
        <DatePicker
          style={styles.datepiker}
          placeholder="Select Birthdate"
          date={this.state.date_of_birth}
          onDateChange={text => {
            this.setState({date_of_birth: text});
          }}
        />
        <DatePicker
          style={styles.datepiker}
          placeholder="Select anniversary date"
          defaultValue={this.state.anniversary_date}
          date={this.state.anniversary_date}
          onDateChange={text => {
            this.setState({anniversary_date: text});
          }}
        />
        <TextInput
          style={styles.inputText}
          value={this.state.personal_notes}
          placeholder="Presonal notes for extra details"
          name="personal_notes"
          onChangeText={text => {
            this.setState({personal_notes: text});
          }}
        />
        <View style={styles.botton}>
          <Button title="submit" onPress={this.onsubmit} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  addpatientContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  inputText: {
    marginTop: 10,
    backgroundColor: Color.textInput,
    padding: 15,
    borderRadius: 5,
  },
  radionbtnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: Color.textInput,
    padding: 10,
  },
  malefemale: {
    marginTop: 7,
  },
  gender: {
    marginTop: 7,
    marginRight: 5,
  },
  pickerContainer: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: Color.textInput,
    padding: 10,
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
    color: '#007aff',
  },
  pickerStyle: {
    width: '100%',
    height: 40,
    color: '#007aff',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  datepiker: {
    width: '100%',
    marginTop: 10,
    backgroundColor: Color.textInput,
  },
  botton: {
    marginTop: 10,
    marginBottom: 50,
  },
});

export default Editprofile;
