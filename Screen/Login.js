import React, {Component} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Actions} from 'react-native-router-flux';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Color from '../constant/Colors';
import {auth_login} from '../Services/AuthService';

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

class Login extends Component {
  request_registration() {
    Actions.request_registration();
  }
  forgot() {
    Actions.forgot();
  }

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
    auth_login(body)
      .then(res => {
        console.log(res);
        // console.log(res.data.token); // token path
        AsyncStorage.setItem('token', res.data.token); // stored token in local storage

        const Token = AsyncStorage.getItem('token'); // get token from local storage
        if (Token !== null) {
          console.log(Token);
          this.props.navigation.navigate('dasbord');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  static navigationOptions = {
    headerMode: 'none',
  };

  // nextpage = () => {
  //   this.props.navigation.navigate('dasbord');
  // };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
              // isValid,
            }) => (
              <>
                <View style={styles.loginBox}>
                  <View style={styles.logoContainer}>
                    <Image
                      style={styles.logo}
                      source={require('../assets/Logo.png')}
                    />
                  </View>

                  <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      marginLeft: 85,
                    }}>
                    {errors.email && touched.email ? (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                        }}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </View>
                  <TextInput
                    name="password"
                    placeholder="Password"
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('email')}
                    value={values.password}
                    secureTextEntry
                  />
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      marginLeft: 85,
                    }}>
                    {errors.password && touched.password ? (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                        }}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.linkview}>
                    <View style={styles.signupTextCont}>
                      <TouchableOpacity onPress={this.request_registration}>
                        <Text style={styles.registrationText}>
                          Request registration
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.forgotTextCont}>
                      <TouchableOpacity onPress={this.forgot}>
                        <Text style={styles.forgotText}>Forgot password</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.loginButton}>
                    <Button
                      onPress={handleSubmit}
                      title="LOGIN"
                      // disabled={!isValid}
                    />
                  </View>

                  {/* <View style={styles.loginbtn}>
                    <Button onPress={this.nextpage} title="Login" />
                  </View> */}
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 150,
  },
  textInput: {
    marginTop: 25,
    padding: 12,
    paddingLeft: 13,
    width: '80%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  linkview: {
    marginTop: 25,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  logoContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },

  loginButton: {
    marginTop: 25,
    width: '80%',
    height: '25%',
    borderRadius: 5,
    marginBottom: 20,
  },

  registrationText: {
    color: Color.textColor,
  },
  forgotText: {
    color: Color.textColor,
  },
  loginbtn: {
    width: '80%',
    marginTop: 25,
  },
});

export default Login;
