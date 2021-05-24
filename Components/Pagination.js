import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

import data from '../data/data';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
    // this.getData();
  }

  getData = async () => {   
    const apiURL =
      'https://jsonplaceholder.typicode.com/photos?_limit=5&_page=' +
      this.state.page;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          data: this.state.data.concat(resJson),
          isLoading: false,
        });
      });
  };

  renderRow = ({item}) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{uri: item.url}} style={styles.itemImage} />
        <Text style={styles.itemText}> {item.title} </Text>
        <Text style={styles.itemText}> {item.id} </Text>
      </View>
    );
  };

  renderFooter = () => {
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1, isLoading: true}, this.getData); // using this logic firs print 10 data than display more data
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff',
  },
  itemRow: {
    borderColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default Pagination;

// import React, {Component} from 'react';
// import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

// import data from '../data/data';

// class Pagination extends React.Component {
//   state = {
//     data: data,
//   };
//   render() {
//     const data = this.state.data;
//     return (
//       <View style={styles.container}>
//         <FlatList
//           maxHeight={200}
//           data={data}
//           renderItem={({item}) => (
//             <Text style={styles.item}>{item.username}</Text>
//           )}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 15,
//     paddingHorizontal: 15,
//   },
//   item: {
//     textAlign: 'center',
//     marginTop: 20,
//     padding: 25,
//     fontSize: 30,
//     backgroundColor: 'steelblue',
//   },
// });

// export default Pagination;
