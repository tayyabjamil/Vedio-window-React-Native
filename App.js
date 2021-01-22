
import {SafeAreaView} from 'react-native';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberLogin:'12346'
    };
 
  }
 
  render() {
    
return (
  
<SafeAreaView style={{flex: 1}}>
{this.state.autoLogin
 &&
<HomeScreen />
  }
{this.state.rememberLogin &&
<LoginScreen />
}
</SafeAreaView>
    );
  }
}
