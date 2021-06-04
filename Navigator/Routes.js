import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

import Login from '../Screen/Login';
import RequestRegistration from '../Screen/RequestRegistration';
import ForgotPassword from '../Screen/ForgotPassword';
import Patientlist from '../Screen/Patientlist';
import Dashboard from '../Screen/Dashboard';
import Addpatient from '../Screen/Addpatient';
import EditProfile from '../Screen/Editprofile';
import Consultation from '../Screen/Consultation';
import AddConsultation from '../Screen/AddConsultation';
import ConsulationList from '../Screen/ConsultationList';
import Report from '../Screen/Report';

const Stack = createStackNavigator();
export default class Routes extends Component<{}> {
  render() {
    return (
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          title: '',
        }}>
        <Stack.Screen key="login" name="login" component={Login} options={{}} />
        <Stack.Screen
          name="request_registration"
          component={RequestRegistration}
          options={{}}
        />
        <Stack.Screen
          key="forgot"
          name="forgot"
          component={ForgotPassword}
          options={{}}
        />
        <Stack.Screen
          key="dasbord"
          name="dasbord"
          component={Dashboard}
          options={{}}
        />
        <Stack.Screen
          key="addpatient"
          name="addpatient"
          component={Addpatient}
          options={{}}
        />
        <Stack.Screen
          key="edit_profile"
          name="edit_profile"
          component={EditProfile}
          options={{}}
        />
        <Stack.Screen
          key="patientlist"
          name="patientlist"
          component={Patientlist}
          options={{}}
        />
        <Stack.Screen
          key="consultation"
          name="consultation"
          component={ConsulationList}
        />
        <Stack.Screen
          key="addConsultation"
          name="addConsultation"
          component={AddConsultation}
        />
        <Stack.Screen key="report" name="report" component={Report} />
      </Stack.Navigator>
    );
  }
}
