// import * as React from 'react';
// import {Appbar} from 'react-native-paper';

// const Patient = () => {
//   const _goBack = () => console.log('Went back');

//   const _handleSearch = () => console.log('Searching');

//   const _handleMore = () => console.log('Shown more');

//   return (
//     <Appbar.Header>
//       <Appbar.BackAction onPress={_goBack} />
//       <Appbar.Content title="Title" subtitle="Subtitle" />
//       <Appbar.Action icon="magnify" onPress={_handleSearch} />
//       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
//     </Appbar.Header>
//   );
// };

// export default Patient;

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Patientlist from '../Screen/Patientlist';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View>
      <Text>the body of patient list</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Patient() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Patient',
      }}>
      <Stack.Screen
        name="Home"
        component={Patientlist}
        options={{
          headerRight: () => (
            <Button style={styles.btn} title="+" color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginRight: 10,
  },
});

export default Patient;
