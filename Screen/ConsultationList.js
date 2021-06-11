import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
// import Hyperlink from 'react-native-hyperlink';

import {getConsultation} from '../Services/AuthService';

class ConsulationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consultdata: [],
      data: [],
      id: '',
    };
  }

  componentDidMount = () => {
    this.getConsultationlist();
  };

  getConsultationlist = () => {
    const id = this.props.route.params.data._id;
    this.setState({id: id});
    console.log(id);

    getConsultation(id)
      .then(res => {
        console.log(res);
        const consultdata = res.data.consult;
        const data = res.data;
        this.setState({consultdata: consultdata, data: data});
      })
      .catch(err => {
        console.log(err);
      });
  };

  add_consultation = () => {
    const id = this.props.route.params.data._id;
    this.props.navigation.navigate('addConsultation', {
      id: id,
    });
  };

  render() {
    const {detail} = this.state.data;
    console.log(detail);
    return (
      <View style={Styles.listView}>
        <View style={Styles.titleContainer}>
          <View style={Styles.titleView}>
            <Text style={Styles.titletext}>Consultation List</Text>
          </View>
          <View style={Styles.buttonView}>
            <Button title="Add Consultation" onPress={this.add_consultation} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.consultdata.map((item, index) => (
            <ConsultationCard
              detail={item}
              key={index}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default ConsulationList;

class ConsultationCard extends React.Component {
  report = () => {
    const id = this.props.detail._id;
    console.log('here is id', id);
    this.props.navigation.navigate('report', {
      id: id,
    });
  };
  render() {
    const detail = this.props.detail.disease;
    // const id = this.props.detail._id;
    // console.log('here is id', id);

    return (
      <View style={Styles.ConsultationContainer}>
        <TouchableOpacity style={Styles.linckContainer} onPress={this.report}>
          <Text style={Styles.reporttext}>Report</Text>
        </TouchableOpacity>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.title}>Details</Text>
          <Text style={Styles.detaildesis} numberOfLines={50}>
            {' '}
            {this.props.detail.details}{' '}
          </Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.title}>Disease</Text>
          <Text style={Styles.detaildesis} numberOfLines={50}>
            {detail.join(', ')}
          </Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.title}>Fee</Text>
          <Text style={Styles.detaildesis}>$ {this.props.detail.fee} </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  listView: {
    height: '100%',
    width: '100%',
  },
  ConsultationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginTop: 4.5,
    shadowOpacity: 0.26,
    shadowOffset: {width: 80, height: 10},
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
  },
  titletext: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    marginLeft: 5,
  },
  buttonView: {
    justifyContent: 'center',
    margin: 7,
    marginRight: 10,
  },
  titleView: {
    marginTop: 7,
  },
  detaildesis: {
    width: '50%',
    textAlign: 'left',
  },
  reporttext: {
    color: 'blue',
    width: '100%',
    textAlign: 'right',
  },
  linckContainer: {
    flexDirection: 'row',
  },
});
