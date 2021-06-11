import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import TagInput from 'react-native-tags-input';

import Color from '../constant/Colors';
import {add_consultation} from '../Services/AuthService';

class AddConsultation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: [],
      },
      details: '',
      fee: '',
    };
  }

  updateTagState = state => {
    this.setState({
      tags: state,
    });
  };

  onsubmit = async () => {
    const id = this.props.route.params.id;

    const body = {
      disease: this.state.tags.tagsArray,
      details: this.state.details,
      fee: this.state.fee,
    };
    console.log('body', body);
    console.log('id', id);
    add_consultation(id, body)
      .then(res => {
        console.log(res);
        Alert.alert('Consultation added successfully..');
        this.props.navigation.navigate('dasbord');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tagContainer}>
          <TagInput
            style={styles.inputtag}
            placeholder="Enter Disease"
            updateState={this.updateTagState}
            tags={this.state.tags}
          />
        </View>
        <View style={styles.inputtagContainer}>
          <TextInput
            placeholder="Enter Details"
            style={styles.textInput}
            onChangeText={text => {
              this.setState({details: text});
            }}
          />
          <TextInput
            placeholder="Enter Fee"
            style={styles.textInput}
            onChangeText={text => {
              this.setState({fee: text});
            }}
          />
        </View>
        <View style={styles.loginContainer}>
          <Button title="SUBMIT" onPress={this.onsubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  tagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  inputtagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  inputtag: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    backgroundColor: Color.textInput,
    borderRadius: 5,
  },
  textInput: {
    marginTop: 25,
    padding: 12,
    width: '100%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  loginContainer: {
    marginTop: 25,
    width: '80%',
    borderRadius: 5,
  },
  consultationView: {
    height: '100%',
    width: '100%',
  },
  headerView: {
    backgroundColor: '#F0F8FF',
    width: '100%',
    height: '7%',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 7,
    marginLeft: 10,
  },
});

export default AddConsultation;
