import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';

import Color from '../constant/Colors';
import {DevURL} from '../Url/Url';
import {auth_forgot} from '../Services/AuthService';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      initialValues: {email: ''},
    };
  }

  onsubmmit = values => {
    auth_forgot(values.email)
      .then(res => {
        console.log(res);
        const Massage = res.data.message;
        Alert.alert(Massage);
        this.props.navigation.navigate('login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.forgotContainer}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={this.state.initialValues}
          onSubmit={this.onsubmmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <View style={styles.forgotBox}>
                <TextInput
                  name="email"
                  placeholder="Email your email"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email ? (
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                    }}>
                    {errors.email}
                  </Text>
                ) : null}

                <View style={styles.loginButton}>
                  <Button onPress={handleSubmit} title="forgot now" />
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forgotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  forgotBox: {
    width: '80%',
    backgroundColor: 'white',
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
  loginButton: {
    marginTop: 25,
    marginBottom: 10,
  },
});

export default ForgotPassword;
