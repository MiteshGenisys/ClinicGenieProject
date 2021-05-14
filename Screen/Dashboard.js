import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Actions} from 'react-native-router-flux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CapsulesIcon from 'react-native-vector-icons/FontAwesome5';
import MedicineboxIcon from 'react-native-vector-icons/AntDesign';

function Dashboard() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Dashboard!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SettingsScreen!</Text>
    </View>
  );
}

function Counsultations() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Counsultations!</Text>
    </View>
  );
}

class More extends React.Component {
  patientlist() {
    Actions.patientlist();
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconLable}>
          <TouchableOpacity
            style={styles.patientlable}
            onPress={this.patientlist}>
            <FontAwesome style={styles.Icon} name="bed" />
            <Text style={styles.LablePatient}>Patient</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconLable}>
          <CapsulesIcon name="capsules" style={styles.Icon} />
          <Text style={styles.lable}>Drugs and doses</Text>
        </View>
        <View style={styles.iconLable}>
          <MedicineboxIcon style={styles.Icon} name="medicinebox" />
          <Text style={styles.lable}>Pharmacies</Text>
        </View>
      </View>
    );
  }
}

function Patient() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Patient!</Text>
    </View>
  );
}

function DrugsDoses() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Drugs and doses!</Text>
    </View>
  );
}

function Pharmacies() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Pharmacies!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    margin: '25%',
    marginTop: '80%',
    marginRight: '5%',
    marginBottom: '5%',
    marginLeft: '45%',
    backgroundColor: 'red',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
  },
  iconLable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Icon: {
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  lable: {
    padding: 15,
  },
  patientlable: {
    flexDirection: 'row',
  },
  LablePatient: {
    paddingLeft: 15,
  },
});

export default function mainDashboard() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen key="dasbord" name="Dasboard" component={Dashboard} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        <Tab.Screen
          key="Counsultations"
          name="Counsultations"
          component={Counsultations}
        />
        <Tab.Screen name="More" component={More} />
        {/* <Tab.Screen key="Patient" name="Patient" component={Patient} />
        <Tab.Screen name="DrugsDoses" component={DrugsDoses} />
        <Tab.Screen name="Pharmacies" component={Pharmacies} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
