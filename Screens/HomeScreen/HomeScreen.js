import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Styles from './Styles'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
   
  }
logout=()=>{
  AsyncStorage.removeItem('autoLogin')
  AsyncStorage.removeItem('rememberLogin')
  AsyncStorage.removeItem('usernameText')
  AsyncStorage.removeItem('passwordText')
  
this.props.navigation.navigate('LoginScreen')
}
  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={this.logout}
          style={Styles.btnContainer}
 
          underlayColor='#fff'
           >
          <Text style={Styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
