import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import Color from '../constant/Colors';
import RegistrationInput from '../Components/RegistrationInput';
import RegisterButton from '../Components/RegisterButton';

class RequestRegistration extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.registrationContainer}>
          <View style={styles.registrationInputView}>
            <RegistrationInput />
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
});

export default RequestRegistration;

// class RequestRegistration extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [1],
//     };
//   }

//   componentDidMount() {
//     this.getapiData();
//   }
//   async getapiData() {
//     let resp = await axios.post(
//       'https://devapi-clinicgenie.indiagenisys.com/inquiry',
//     );
//     console.warn(resp.data.inquiry);
//     this.setState({data: resp.data.first_name});
//   }

//   render() {
//     return (
//       <View>
//         {this.state.data.length > 0 ? (
//           <View>
//             {this.state.data.map(item => (
//               <Text>{item.first_name}</Text>
//             ))}
//           </View>
//         ) : (
//           <Text>data is loading....</Text>
//         )}
