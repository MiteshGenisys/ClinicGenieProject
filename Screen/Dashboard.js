import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Patientlist from '../Screen/Patientlist';
import CapsulesIcon from 'react-native-vector-icons/FontAwesome5';
import MedicineboxIcon from 'react-native-vector-icons/AntDesign';
import FileMedical from 'react-native-vector-icons/FontAwesome5';

function Dasbord() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Dasbord!</Text>
    </View>
  );
}

function Consulations() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Consulations!</Text>
    </View>
  );
}

class More extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconLable}>
          <CapsulesIcon name="capsules" style={styles.Icon} />
          <Text style={styles.lable}>Drugs and doses</Text>
        </View>
        <View style={styles.iconLable}>
          <TouchableOpacity style={styles.patientlable}>
            <FileMedical style={styles.Icon} name="file-medical" />
            <Text style={styles.LablePatient}>Prescriptions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconLable}>
          <MedicineboxIcon style={styles.Icon} name="medicinebox" />
          <Text style={styles.lable}>Pharmacies</Text>
        </View>
      </View>
    );
  }
}

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Dasbord') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Pationts') {
              iconName = focused ? 'bed' : 'bed';
            } else if (route.name === 'Consulations') {
              iconName = focused ? 'stethoscope' : 'stethoscope';
            } else if (route.name === 'More') {
              iconName = focused ? 'ellipsis-h' : 'ellipsis-h';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Dasbord" component={Dasbord} />
        <Tab.Screen name="Pationts" component={Patientlist} />
        <Tab.Screen name="Consulations" component={Consulations} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
  patientlable: {
    flexDirection: 'row',
  },
  Icon: {
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  LablePatient: {
    paddingLeft: 15,
  },
  lable: {
    padding: 15,
  },
});
