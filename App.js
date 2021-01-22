
import {SafeAreaView} from 'react-native';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberLogin:false,
      autoLogin:false
    };
 
  }
 async componentDidMount(){
  const rememberLogin = await AsyncStorage.getItem('rememberLogin')
  const autoLogin = await AsyncStorage.getItem('autoLogin')
 
  if(rememberLogin=="true"){
  this.setState({rememberLogin:true})
 }

 if(autoLogin=="true"){
  this.setState({autoLogin:true})
 }
}
  render() {
   
return (
  
<SafeAreaView style={{flex: 1}}>
  {(this.state.rememberLogin == false && this.state.autoLogin == false) &&
<LoginScreen />
  }
{this.state.autoLogin == true
 &&
<LoginScreen />
}
{this.state.rememberLogin ==true&&
  <HomeScreen />
}
</SafeAreaView>
    );
  }
}
