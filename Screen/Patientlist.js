import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import data from '../data/data';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class Patientlist extends React.Component {
  state = {
    data: data,
  };

  patientlist = () => {
    return this.state.data.map(data => {
      return <Patient detail={data} key={data.id} />;
    });
  };

  render() {
    return (
      <ScrollView
        style={styles.patientContainer}
        showsVerticalScrollIndicator={false}>
        {this.patientlist()}
      </ScrollView>
    );
  }
}

export default Patientlist;

class Patient extends React.Component {
  render() {
    return (
      <View style={styles.patientBox}>
        <View style={styles.nameContainer}>
          <Text style={styles.pname}>{this.props.detail.username}</Text>
        </View>
        <View style={styles.patientdetailContainer}>
          <View style={styles.contactage}>
            <Text style={styles.pcontact}> {this.props.detail.contact} </Text>
            <Text style={styles.pdetails}>|</Text>
            <Text style={styles.pdetails}> {this.props.detail.age} </Text>
            <Text style={styles.pdetails}>|</Text>
            <Text style={styles.pdetails}> {this.props.detail.gender} </Text>
          </View>
          <View style={styles.editdelete}>
            <TouchableOpacity>
              <FontAwesome
                style={styles.icon}
                name="pen"
                size={17}
                color="#949494"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="trash-alt" size={17} color="#737373" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lastconsult}>
          <Text style={styles.lastdate}> {this.props.detail.lastconsult} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  patientContainer: {
    flex: 1,
  },
  patientBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    marginTop: 4.5,
    shadowOpacity: 0.26,
    shadowOffset: {width: 80, height: 10},
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
  },
  nameContainer: {
    flexDirection: 'row',
    paddingLeft: 7,
    marginBottom: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pname: {
    textAlign: 'right',
    fontSize: 17,
    fontWeight: 'bold',
  },
  patientdetailContainer: {
    flexDirection: 'row',
    paddingLeft: 7,
    marginBottom: 4,
    justifyContent: 'space-between',
    width: '100%',
  },
  editdelete: {
    flexDirection: 'row',
  },
  contactage: {
    flexDirection: 'row',
  },
  lastconsult: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 7,
  },
  icon: {
    marginRight: 13,
  },
  pdetails: {
    marginLeft: 10,
    color: '#737373',
  },
  pcontact: {
    color: '#737373',
  },
  lastdate: {
    color: '#737373',
  },
});

// import React, {Component} from 'react';
// import {View, Text, StyleSheet, ScrollView} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';

// import data from '../data/data';
// import Patient from '../Screen/Patient';

// function HomeScreen() {
//   return (
//     <View>
//       <Text>the body of patient list</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function Patientlist() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         title: '',
//       }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// export default Patientlist;
