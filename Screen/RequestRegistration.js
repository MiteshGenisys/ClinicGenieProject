import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Text,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import Color from '../constant/Colors';
import {auth_register} from '../Services/AuthService';

const loginValidationSchema = yup.object().shape({
  first_name: yup.string().required('Firstname can not blank!!'),
  last_name: yup.string().required('Last name can not blank!!'),
  mobile_number: yup.number().required('Mobile number can not blank !!'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email can not blank!!'),
  clinic_name: yup.string().required('Clinic name can not blank!!'),
  address: yup.string().required('Address can not blank!!'),
  city: yup.string().required('City name can not blank!!'),
  state: yup.string().required('State name can not blank!!!'),
  country: yup.string().required('Country name can not blank!!'),
  pincode: yup.number().required('Pincode can not blank!!'),
});

class RequestRegistration extends Component {
  constructor() {
    super();
    this.state = {
      initialValues: {
        first_name: '',
        last_name: '',
        mobile_number: '',
        email: '',
        clinic_name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
      },
    };
  }

  onsubmmit = values => {
    const body = {
      first_name: values.first_name, // in this first_name variable is as per define in backen side
      last_name: values.last_name,
      mobile_number: values.mobile_number,
      email: values.email,
      clinic_name: values.clinic_name,
      address: values.address,
      city: values.city,
      state: values.state,
      country: values.country,
      pincode: values.pincode,
    };
    auth_register(body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.registrationContainer}>
          <View style={styles.registrationInputView}>
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
                    // isValid,
                  }) => (
                    <>
                      <View style={styles.emailPasswors}>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                          <View style={styles.firstname}>
                            <TextInput
                              name="first_name"
                              style={styles.textInputFirstLast}
                              placeholder="First name"
                              onChangeText={handleChange('first_name')}
                              onBlur={handleBlur('first_name')}
                              value={values.first_name}
                            />
                            <TextInput
                              name="last_name"
                              style={styles.textInputFirstLast}
                              placeholder="Last name"
                              onChangeText={handleChange('last_name')}
                              onBlur={handleBlur('last_name')}
                              value={values.last_name}
                            />
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View
                              style={{
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                alignContent: 'flex-end',
                              }}>
                              {errors.first_name && touched.first_name ? (
                                <Text
                                  style={{
                                    fontSize: 10,
                                    color: 'red',
                                    marginRight: 70,
                                    marginLeft: 1,
                                  }}>
                                  {errors.first_name}
                                </Text>
                              ) : null}
                            </View>
                            <View>
                              {errors.last_name && touched.last_name ? (
                                <Text style={{fontSize: 10, color: 'red'}}>
                                  {errors.last_name}
                                </Text>
                              ) : null}
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.emailContainer}>
                        <TextInput
                          name="mobile_number"
                          style={styles.textInput}
                          placeholder="Mobile number"
                          onChangeText={handleChange('mobile_number')}
                          onBlur={handleBlur('mobile_number')}
                          value={values.mobile_number}
                        />
                        {errors.mobile_number && touched.mobile_number ? (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.mobile_number}
                          </Text>
                        ) : null}
                      </View>
                      <View style={styles.emailContainer}>
                        <TextInput
                          name="email"
                          style={styles.textInput}
                          placeholder="Enter your email address"
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
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
                      </View>
                      <View style={styles.passContainer}>
                        <TextInput
                          name="clinic_name"
                          style={styles.textInput}
                          placeholder="Enter your clinic name"
                          onChangeText={handleChange('clinic_name')}
                          onBlur={handleBlur('clinic_name')}
                          value={values.clinic_name}
                        />
                        {errors.clinic_name && touched.clinic_name ? (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.clinic_name}
                          </Text>
                        ) : null}
                      </View>
                      <View style={styles.emailContainer}>
                        <TextInput
                          name="address"
                          style={styles.textInputAdress}
                          placeholder="Enter your address"
                          onChangeText={handleChange('address')}
                          onBlur={handleBlur('address')}
                          value={values.address}
                          multiline={true}
                          numberOfLines={3} // default numbers of lines
                        />
                        {errors.address && touched.address ? (
                          <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.address}
                          </Text>
                        ) : null}
                      </View>
                      <View style={styles.emailPasswors}>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <TextInput
                              name="city"
                              style={styles.textInputFirstLast}
                              placeholder="Enter your city"
                              onChangeText={handleChange('city')}
                              onBlur={handleBlur('city')}
                              value={values.city}
                            />
                            <TextInput
                              name="state"
                              style={styles.textInputFirstLast}
                              placeholder="Enter your state"
                              onChangeText={handleChange('state')}
                              onBlur={handleBlur('state')}
                              value={values.state}
                            />
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View>
                              {errors.city && touched.city ? (
                                <Text
                                  style={{
                                    fontSize: 10,
                                    color: 'red',
                                    marginRight: 70,
                                    marginLeft: 1,
                                  }}>
                                  {errors.city}
                                </Text>
                              ) : null}
                            </View>
                            <View>
                              {errors.state && touched.state ? (
                                <Text style={{fontSize: 10, color: 'red'}}>
                                  {errors.state}
                                </Text>
                              ) : null}
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.emailPasswors}>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <TextInput
                              name="country"
                              style={styles.textInputFirstLast}
                              placeholder="Enter your Country"
                              onChangeText={handleChange('country')}
                              onBlur={handleBlur('country')}
                              value={values.country}
                            />
                            <TextInput
                              name="pincode"
                              style={styles.textInputFirstLast}
                              placeholder="Enter your pincode"
                              onChangeText={handleChange('pincode')}
                              onBlur={handleBlur('pincode')}
                              value={values.pincode}
                            />
                          </View>
                          <View style={{flex: 2, flexDirection: 'row'}}>
                            <View>
                              {errors.country && touched.country ? (
                                <Text
                                  style={{
                                    fontSize: 10,
                                    color: 'red',
                                    marginRight: 70,
                                    marginLeft: 1,
                                  }}>
                                  {errors.country}
                                </Text>
                              ) : null}
                            </View>
                            <View>
                              {errors.pincode && touched.pincode ? (
                                <Text style={{fontSize: 10, color: 'red'}}>
                                  {errors.pincode}
                                </Text>
                              ) : null}
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.registrationButton}>
                        <Button
                          onPress={handleSubmit}
                          title="register"
                          // disabled={!isValid}
                        />
                      </View>
                    </>
                  )}
                </Formik>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  registrationContainer: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  registrationInputView: {
    width: '100%',
    alignItems: 'center',
  },
  InputView: {
    width: '90%',
    marginBottom: 10,
  },
  emailPasswors: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputFirstLast: {
    marginTop: 40,
    padding: 12,
    paddingLeft: 13,
    width: '49%',
    marginLeft: 3,
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  textInput: {
    marginTop: 40,
    padding: 12,
    paddingLeft: 13,
    width: '100%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  textInputAdress: {
    marginTop: 40,
    padding: -10,
    paddingLeft: 13,
    paddingBottom: 30,
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  emailPasswors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // textInputFirstLast: {
  //   marginTop: 40,
  //   padding: 12,
  //   paddingLeft: 13,
  //   width: '49%',
  //   backgroundColor: Color.textInput,
  //   alignItems: 'center',
  //   borderRadius: 5,
  // },
  registrationButton: {
    marginTop: 40,
    marginBottom: 15,
  },
  firstname: {
    flex: 2,
    flexDirection: 'row',
    borderRadius: 15,
  },
});

export default RequestRegistration;

// import React, {Component} from 'react';
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   Button,
//   Text,
// } from 'react-native';

// class RequestRegistration extends Component {
//   render() {
//     return (
{
  /* <View style={{flex: 2, flexDirection: 'column'}}>
    <View style={{flex: 2, flexDirection: 'row'}}>
      <View style={{flex: 2, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    </View>
    <View style={{flex: 2, flexDirection: 'row'}}>
      <View style={{flex: 2, backgroundColor: 'blue'}} />
      <View style={{flex: 2, backgroundColor: 'red'}} />
    </View>
  </View> */
}
//     );
//   }
// }

// const styles = StyleSheet.create({});

// export default RequestRegistration;
