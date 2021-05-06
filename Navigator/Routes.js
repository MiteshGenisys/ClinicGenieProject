import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../Screen/Login';
import RequestRegistration from '../Screen/RequestRegistration';
import ForgotPassword from '../Screen/ForgotPassword';
import PersonList from '../Components/PersonList';

export default class Routes extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene
            key="request_registration"
            component={RequestRegistration}
            title="Register"
          />
          <Scene key="forgot" component={PersonList} title="forgot" />
        </Stack>
      </Router>
    );
  }
}
