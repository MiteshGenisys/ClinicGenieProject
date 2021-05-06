import React, {Component} from 'react';
import {Button, TextInput, View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Color from '../constant/Colors';
import Links from '../Components/Link';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

class Input extends Component {
  constructor() {
    super();
    this.state = {
      initialValues: {email: '', password: ''},
    };
  }

  onsubmmit = values => {
    const body = {
      email: values.email,
      password: values.password,
    };
    axios
      .post('https://devapi-clinicgenie.indiagenisys.com/doctor/login', body)
      .then(res => {
        console.log(res);
        // console.log(res.data.token);
        AsyncStorage.setItem('token', res.data.token); // here is stored token value in Asynkstorage

        const value = AsyncStorage.getItem('token'); // here is featch token data from Asysnkstorage
        if (value !== null) {
          console.log(value);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View style={styles.InputView}>
        <View style={styles.inputitem}>
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
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email ? (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.email}
                  </Text>
                ) : null}
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('email')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.password}
                  </Text>
                ) : null}
                <View style={styles.linksView}>
                  <Links />
                </View>

                <View style={styles.loginButton}>
                  <Button
                    onPress={handleSubmit}
                    title="LOGIN"
                    disabled={!isValid}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputView: {
    width: '80%',
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
  linksView: {
    width: '100%',
  },
  loginButton: {
    width: '100%',
    borderRadius: 10,
    marginTop: 25,
  },
  inputitem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Input;
