import React from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

class MoreScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={{fontSize: 80}}>Hello This is Mote Screen</Text>
        <Button
          title="show modal"
          onPress={() => {
            this.setState({show: true});
          }}
        />
        <Modal transparent={true} visible={this.state.show}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                backgroundColor: '#ffffff',
                margin: 50,
                padding: 40,
                borderRadius: 10,
                flex: 1,
              }}>
              <Text style={{fontSize: 80}}>Model Screen</Text>
              <Button
                title="close modal"
                onPress={() => {
                  this.setState({show: false});
                }}
              />
            </View>
          </View>
        </Modal> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    elevation: 3,
    backgroundColor: 'white',
  },
});

export default MoreScreen;

// import React, {Component} from 'react';
// import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import {
//   MenuContext,
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
// import {Ionicons} from '@expo/vector-icons';

// export default class MoreScreen extends Component {
//   render() {
//     return (
//       <MenuContext style={styles.container}>
//         <View>
//           <Menu>
//             <MenuTrigger text="Open menu" />

//             <MenuOptions>
//               <MenuOption onSelect={() => alert(`Save`)} text="Save" />
//               <MenuOption onSelect={() => alert(`Delete`)}>
//                 <Text style={{color: 'red'}}>Delete</Text>
//               </MenuOption>
//               <MenuOption
//                 onSelect={() => alert(`Not called`)}
//                 disabled={true}
//                 text="Disabled"
//                 s
//               />
//             </MenuOptions>
//           </Menu>
//         </View>
//       </MenuContext>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50,
//     backgroundColor: '#ecf0f1',
//   },
// });

///////////////////////////////////
