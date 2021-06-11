import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Color from '../constant/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      inputData: [],
      decData: [],
      resultData: [],
    };
  }

  componentDidMount = () => {
    this.addTextInput();
  };

  //function to add TextInput dynamically
  addTextInput = index => {
    let textInput = this.state.textInput;
    textInput.push(
      <View style={styles.inputboxContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => this.removeTextInput()}>
          <FontAwesome
            style={styles.icon}
            name="times"
            size={17}
            color={Color.patientlist}
          />
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter report type"
            onChangeText={text => this.addValues(text, index)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter description"
            onChangeText={text => this.addDecValues(text, index)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter result"
            onChangeText={text => this.addresultValues(text, index)}
          />
        </View>
      </View>,
    );
    this.setState({textInput});
  };

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({textInput, inputData});
  };

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        inputData: dataArray,
      });
    } else {
      dataArray.push({text: text, index: index});
      this.setState({
        inputData: dataArray,
      });
    }
  };
  addDecValues = (text, index) => {
    let dataArray = this.state.decData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        decData: dataArray,
      });
    } else {
      dataArray.push({text: text, index: index});
      this.setState({
        decData: dataArray,
      });
    }
  };
  addresultValues = (text, index) => {
    let dataArray = this.state.resultData;
    let checkBool = false;
    if (dataArray.length !== 0) {
      dataArray.forEach(element => {
        if (element.index === index) {
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool) {
      this.setState({
        resultData: dataArray,
      });
    } else {
      dataArray.push({text: text, index: index});
      this.setState({
        resultData: dataArray,
      });
    }
  };

  //function to console the output
  getValues = () => {
    const inputData = this.state.inputData;
    const decData = this.state.decData;
    const resultData = this.state.resultData;

    console.log(
      'inputData',
      {inputData},
      'Description Data',
      {decData},
      'resultData',
      {resultData},
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleView}>
            <Text style={styles.titletext}>Report List</Text>
          </View>
          <View style={styles.buttonView}>
            <Button title="Add report" onPress={this.add_consultation} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.textInput.map(value => {
            return value;
          })}
          <View style={styles.addsubmitButton}>
            <View>
              <Button
                title="Add"
                onPress={() => this.addTextInput(this.state.textInput.length)}
              />
            </View>
            <View>
              <Button title="submit" onPress={() => this.getValues()} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    backgroundColor: '#EAF2FB',
  },
  titleView: {
    marginTop: 7,
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
  Container: {
    backgroundColor: 'white',
    height: '100%',
  },
  inputboxContainer: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  textInput: {
    marginTop: 25,
    padding: 12,
    paddingLeft: 13,
    width: '100%',
    backgroundColor: Color.textInput,
    alignItems: 'center',
    borderRadius: 5,
  },
  addsubmitButton: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  iconContainer: {
    width: '100%',
    backgroundColor: 'white',
  },
  icon: {
    alignSelf: 'flex-end',
  },
});

export default Report;

// import React, {Component} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

// // import ReportBox from '../Components/ReportBox';

// class MyClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textInput: [],
//       inputData: [],
//     };
//   }

//   //function to add TextInput dynamically
//   addTextInput = index => {
//     let textInput = this.state.textInput;
//     textInput.push(
//       <View>
//         <Text>Hello</Text>
//         <TextInput
//           style={styles.textInput}
//           onChangeText={text => this.addValues(text, index)}
//         />
//       </View>,
//     );
//     this.setState({textInput});
//   };

//   //function to remove TextInput dynamically
//   removeTextInput = () => {
//     let textInput = this.state.textInput;
//     let inputData = this.state.inputData;
//     textInput.pop();
//     inputData.pop();
//     this.setState({textInput, inputData});
//   };

//   //function to add text from TextInputs into single array
//   addValues = (text, index) => {
//     let dataArray = this.state.inputData;
//     let checkBool = false;
//     if (dataArray.length !== 0) {
//       dataArray.forEach(element => {
//         if (element.index === index) {
//           element.text = text;
//           checkBool = true;
//         }
//       });
//     }
//     if (checkBool) {
//       this.setState({
//         inputData: dataArray,
//       });
//     } else {
//       dataArray.push({text: text, index: index});
//       this.setState({
//         inputData: dataArray,
//       });
//     }
//   };

//   //function to console the output
//   getValues = () => {
//     console.log('Data', this.state.inputData);
//   };

//   render() {
//     return (
//       <View>
//         <View style={styles.row}>
//           <View style={{margin: 10}}>
//             <Button
//               title="Add"
//               onPress={() => this.addTextInput(this.state.textInput.length)}
//             />
//           </View>
//           <View style={{margin: 10}}>
//             <Button title="Remove" onPress={() => this.removeTextInput()} />
//           </View>
//         </View>
//         {this.state.textInput.map(value => {
//           return value;
//         })}
//         <Button title="Get Values" onPress={() => this.getValues()} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   buttonView: {
//     flexDirection: 'row',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });

// export default MyClass;

// import React, {Component} from 'react';
// import {View, TextInput, Button, StyleSheet} from 'react-native';

// class MyClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textInput: [],
//       inputData: [],
//     };
//   }

//   //function to add TextInput dynamically
//   addTextInput = index => {
//     let textInput = this.state.textInput;
//     textInput.push(
//       <TextInput
//         style={styles.textInput}
//         onChangeText={text => this.addValues(text, index)}
//       />,
//     );
//     this.setState({textInput});
//   };

//   //function to remove TextInput dynamically
//   removeTextInput = () => {
//     let textInput = this.state.textInput;
//     let inputData = this.state.inputData;
//     textInput.pop();
//     inputData.pop();
//     this.setState({textInput, inputData});
//   };

//   //function to add text from TextInputs into single array
//   addValues = (text, index) => {
//     let dataArray = this.state.inputData;
//     let checkBool = false;
//     if (dataArray.length !== 0) {
//       dataArray.forEach(element => {
//         if (element.index === index) {
//           element.text = text;
//           checkBool = true;
//         }
//       });
//     }
//     if (checkBool) {
//       this.setState({
//         inputData: dataArray,
//       });
//     } else {
//       dataArray.push({text: text, index: index});
//       this.setState({
//         inputData: dataArray,
//       });
//     }
//   };

//   //function to console the output
//   getValues = () => {
//     console.log('Data', this.state.inputData);
//   };

//   render() {
//     return (
//       <View>
//         <View style={styles.row}>
//           <View style={{margin: 10}}>
//             <Button
//               title="Add"
//               onPress={() => this.addTextInput(this.state.textInput.length)}
//             />
//           </View>
//           <View style={{margin: 10}}>
//             <Button title="Remove" onPress={() => this.removeTextInput()} />
//           </View>
//         </View>
//         {this.state.textInput.map(value => {
//           return value;
//         })}
//         <Button title="Get Values" onPress={() => this.getValues()} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   buttonView: {
//     flexDirection: 'row',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });

// export default MyClass;
