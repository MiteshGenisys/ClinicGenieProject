import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {get_patientdetails} from '../Services/AuthService';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Color from '../constant/Colors';

class Patientlist extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.getpatientlist();
  };

  getpatientlist = () => {
    get_patientdetails()
      .then(res => {
        // console.log(res.data);
        const data = res.data;
        this.setState({data: data});
      })

      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.data);
    return (
      <ScrollView
        style={styles.patientContainer}
        showsVerticalScrollIndicator={false}>
        {this.state.data.map((item, index) => (
          <Patient
            detail={item}
            key={index}
            navigation={this.props.navigation}
          />
        ))}
      </ScrollView>
    );
  }
}

export default Patientlist;

class Patient extends React.Component {
  editProfile = data => {
    this.props.navigation.navigate('edit_profile', {
      data: data,
    });
  };
  consulation = data => {
    this.props.navigation.navigate('consultation', {
      data: data,
    });
  };
  render() {
    const {detail} = this.props;
    let today = new Date(),
      dob = new Date(detail.date_of_birth),
      diff = today.getTime() - dob.getTime(),
      years = Math.floor(diff / 31556736000);

    return (
      <TouchableOpacity onPress={() => this.consulation(this.props.detail)}>
        <View style={styles.patientBox}>
          <View style={styles.nameContainer}>
            <Text style={styles.pname}>{this.props.detail.first_name}</Text>
            <Text style={styles.pname}> {this.props.detail.last_name} </Text>
          </View>
          <View style={styles.patientdetailContainer}>
            <View style={styles.contactage}>
              <Text style={styles.pcontact}>
                {' '}
                {this.props.detail.mobile_number}{' '}
              </Text>
              <Text style={styles.pdetails}>|</Text>
              <Text style={styles.pdetails}> {years} </Text>
              <Text style={styles.pdetails}>|</Text>
              <Text style={styles.pdetails}> {this.props.detail.gender} </Text>
            </View>
            <View style={styles.editdelete}>
              <TouchableOpacity
                onPress={() => this.editProfile(this.props.detail)}>
                <FontAwesome
                  style={styles.icon}
                  name="pen"
                  size={17}
                  color={Color.patientlist}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="trash-alt"
                  size={17}
                  color={Color.patientlist}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastconsult}>
            <Text style={styles.lastdate}>
              {' '}
              {this.props.detail.lastconsult}{' '}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
    color: Color.patientlist,
  },
  pcontact: {
    color: Color.patientlist,
  },
  lastdate: {
    color: Color.patientlist,
  },
});
