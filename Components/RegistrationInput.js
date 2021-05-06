import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {Formik, yupToFormErrors} from 'formik';
import * as yup from 'yup';

import Color from '../constant/Colors';
import RegisterButton from '../Components/RegisterButton';

const loginValidationSchema = yup.object().shape({
  fname: yup.string().required('Firstname can not blank!!'),
  last_name: yup.string().required('Last name can not blank!!'),
  mobile_number: yup.string().required('Mobile number can not blank !!'),
  email: yup.string().required('Email can not blank!!'),
  clinic_name: yup.string().required('Clinic name can not blank!!'),
  address: yup.string().required('Address can not blank!!'),
  city: yup.string().required('City name can not blank!!'),
  state: yup.string().required('State name can not blank!!!'),
  country: yup.string().required('Country name can not blank!!'),
  pincode: yup.string().required('Pincode can not blank!!'),
});

class RegistrationInput extends Component {
  constructor() {
    super();
    this.state = {
      initialValues: {
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
      },
    };
  }
  onsubmmit = values => {
    const body = {
      first_name: values.fname, // in this first_name variable is as per define in backen side
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
    axios
      .post('https://devapi-clinicgenie.indiagenisys.com/inquiry', body)
      .then(res => {
        console.log(res);
        // console.log(res.data.token);
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
                <View style={styles.emailPasswors}>
                  <TextInput
                    name="fname"
                    style={styles.textInputFirstLast}
                    placeholder="First name"
                    onChangeText={handleChange('fname')}
                    onBlur={handleBlur('fname')}
                    value={values.first_name}
                  />
                  {errors.first_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.first_name}
                    </Text>
                  )}
                  <TextInput
                    name="last_name"
                    style={styles.textInputFirstLast}
                    placeholder="First name"
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    value={values.last_name}
                  />
                  {errors.last_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.last_name}
                    </Text>
                  )}
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
                  {errors.mobile_number && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.mobile_number}
                    </Text>
                  )}
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
                  {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
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
                  {errors.clinic_name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.clinic_name}
                    </Text>
                  )}
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
                  {errors.address && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.address}
                    </Text>
                  )}
                </View>
                <View style={styles.emailPasswors}>
                  <TextInput
                    name="city"
                    style={styles.textInputFirstLast}
                    placeholder="Enter your city"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                  />
                  {errors.city && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.city}
                    </Text>
                  )}
                  <TextInput
                    name="state"
                    style={styles.textInputFirstLast}
                    placeholder="Enter your state"
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    value={values.state}
                  />
                  {errors.state && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.state}
                    </Text>
                  )}
                </View>
                <View style={styles.emailPasswors}>
                  <TextInput
                    name="country"
                    style={styles.textInputFirstLast}
                    placeholder="Enter your Country"
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    value={values.country}
                  />
                  {errors.country && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.country}
                    </Text>
                  )}
                  <TextInput
                    name="pincode"
                    style={styles.textInputFirstLast}
                    placeholder="Enter your pincode"
                    onChangeText={handleChange('pincode')}
                    onBlur={handleBlur('pincode')}
                    value={values.pincode}
                  />
                  {errors.pincode && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.pincode}
                    </Text>
                  )}
                </View>

                <View style={styles.registerButton}>
                  <Button
                    onPress={handleSubmit}
                    title="register"
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
    width: '90%',
    marginBottom: 10,
  },
  emailPasswors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputFirstLast: {
    marginTop: 25,
    padding: 12,
    paddingLeft: 13,
    width: '49%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 10,
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
  textInputAdress: {
    marginTop: 25,
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
  textInputFirstLast: {
    marginTop: 25,
    padding: 12,
    paddingLeft: 13,
    width: '49%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  registerButton: {
    marginTop: 25,
    marginBottom: 25,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Color.button,
    width: '100%',
  },
});

export default RegistrationInput;

// import React, {Component} from 'react';
// import {
//   View,
//   StyleSheet,
//   TextInput,
//   Button,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import axios from 'axios';

// import Color from '../constant/Colors';
// import RegisterButton from '../Components/RegisterButton';

// class RegistrationInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fname: '',
//       last_name: '',
//       mobile_number: '',
//       email: '',
//       clinic_name: '',
//       address: '',
//       city: '',
//       state: '',
//       country: '',
//       pincode: '',
//     };
//   }

//   changeHandler = e => {
//     this.setState({[e.target.name]: e.target.value});
//   };

//   onsubmit = () => {
//     const body = {
//       first_name: this.state.fname, // in this first_name variable is as per define in backen side
//       last_name: this.state.last_name,
//       mobile_number: this.state.mobile_number,
//       email: this.state.email,
//       clinic_name: this.state.clinic_name,
//       address: this.state.address,
//       city: this.state.city,
//       state: this.state.state,
//       country: this.state.country,
//       pincode: this.state.pincode,
//     };
//     axios
//       .post('https://devapi-clinicgenie.indiagenisys.com/inquiry', body)
//       .then(res => {
//         // console.log(res);
//         console.warn(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <View style={styles.InputView}>
//         <View style={styles.emailPasswors}>
//           <TextInput
//             style={styles.textInputFirstLast}
//             onChangeText={text => {
//               this.setState({fname: text});
//             }}
//             placeholder="First name"
//           />
//           <TextInput
//             style={styles.textInputFirstLast}
//             onChangeText={text => {
//               this.setState({last_name: text});
//             }}
//             placeholder="Last name"
//           />
//         </View>
//         <View style={styles.emailContainer}>
//           <TextInput
//             style={styles.textInput}
//             onChangeText={text => {
//               this.setState({mobile_number: text});
//             }}
//             placeholder="Mobile number"
//           />
//         </View>
//         <View style={styles.emailContainer}>
//           <TextInput
//             style={styles.textInput}
//             onChangeText={text => {
//               this.setState({email: text});
//             }}
//             placeholder="Enter your email address"
//           />
//         </View>
//         <View style={styles.passContainer}>
//           <TextInput
//             style={styles.textInput}
//             onChangeText={text => {
//               this.setState({clinic_name: text});
//             }}
//             placeholder="Enter your clinic name"
//           />
//         </View>
//         <View style={styles.emailContainer}>
//           <TextInput
//             style={styles.textInputAdress}
//             onChangeText={text => {
//               this.setState({address: text});
//             }}
//             multiline={true}
//             numberOfLines={3} // default numbers of lines
//             placeholder="Enter your address"
//           />
//         </View>
//         <View style={styles.emailPasswors}>
//           <TextInput
//             style={styles.textInputFirstLast}
//             onChangeText={text => {
//               this.setState({city: text});
//             }}
//             placeholder="Enter your city"
//           />
//           <TextInput
//             style={styles.textInputFirstLast}
//             onChangeText={text => {
//               this.setState({state: text});
//             }}
//             placeholder="Enter your state"
//           />
//         </View>
//         <View style={styles.emailPasswors}>
//           <TextInput
//             style={styles.textInputFirstLast}
//             onChangeText={text => {
//               this.setState({country: text});
//             }}
//             placeholder="Enter your Country"
//           />
//           <TextInput
//             style={styles.textInputFirstLast}
//             onChangeText={text => {
//               this.setState({pincode: text});
//             }}
//             placeholder="Enter your pincode"
//           />
//         </View>
//         <TouchableOpacity style={styles.registerButton} onPress={this.onsubmit}>
//           <RegisterButton />
//         </TouchableOpacity>
//         <Text>{this.state.text}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   InputView: {
//     width: '80%',
//     backgroundColor: 'white',
//   },
//   emailPasswors: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   textInputFirstLast: {
//     marginTop: 25,
//     padding: 12,
//     paddingLeft: 13,
//     width: '49%',
//     backgroundColor: Color.textInput,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   textInput: {
//     marginTop: 25,
//     padding: 12,
//     paddingLeft: 13,
//     backgroundColor: Color.textInput,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   textInputAdress: {
//     marginTop: 25,
//     padding: -10,
//     paddingLeft: 13,
//     paddingBottom: 30,
//     backgroundColor: Color.textInput,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   registerButton: {
//     marginTop: 25,
//     marginBottom: 25,
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     backgroundColor: Color.button,
//     width: '100%',
//   },
// });

// export default RegistrationInput;
