import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import More from 'react-native-vector-icons/Feather';
import CapsulesIcon from 'react-native-vector-icons/FontAwesome5';
import FileMedical from 'react-native-vector-icons/FontAwesome5';
import MedicineboxIcon from 'react-native-vector-icons/AntDesign';
import DasboardScreen from '../Components/BottomMenuDoctor/DasboardScreen';
import ConsulationScreen from '../Components/BottomMenuDoctor/ConsulationScreen';
import PrescriptionScreen from '../Components/BottomMenuDoctor/PrescriptionScreen';

class MoreScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconLable}>
          <FontAwesome style={styles.Icon} name="bed" />
          <Text style={styles.lable}>Patient</Text>
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

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: DasboardScreen,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome
              style={styles.Icon}
              name="th-large"
              color={tintColor}
            />
          </View>
        ),
      },
    },
    Prescriptions: {
      screen: PrescriptionScreen,
      navigationOptions: {
        tabBarLabel: 'Prescriptions',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FileMedical
              style={styles.Icon}
              name="file-medical"
              color={tintColor}
            />
          </View>
        ),
        activeColor: 'blue',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: 'white'},
      },
    },
    Counsultations: {
      screen: ConsulationScreen,
      navigationOptions: {
        tabBarLabel: 'Counsultations',
        tabBarIcon: ({tintColor}) => (
          <View>
            <FontAwesome
              style={styles.Icon}
              name="handshake-o"
              color={tintColor}
            />
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: {backgroundColor: 'white'},
      },
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({tintColor}) => (
          <View>
            <More
              style={styles.Icon}
              name="more-horizontal"
              color={tintColor}
            />
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: {backgroundColor: 'white'},
      },
    },
  },
  {
    tabBarOptions: {
      initialRouteName: 'Home',
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      barStyle: {backgroundColor: 'white'},
    },
  },
);

const styles = StyleSheet.create({
  Icon: {
    fontSize: 20,
    justifyContent: 'flex-start',
  },
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
  lable: {
    padding: 15,
  },
});

export default createAppContainer(TabNavigator);
