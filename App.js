
import {SafeAreaView} from 'react-native';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import MainNavigation from './Navigation/MainNavigation';

import Splash from './Screens/Splash/Splash';
import SplashScreen from './Screens/Splash/Splash'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberLogin:false,
      autoLogin:false,
      newUser:true
    };
 
  }
 async componentDidMount(){
 
}
  render() {
   
return (
  
<SafeAreaView style={{flex: 1}}>
<MainNavigation />
</SafeAreaView>
    );
  }
}



// import * as React from 'react';
// import { createStackNavigator } from 'react-navigation-stack'
// import SplashScreen from './Screens/Splash/Splash'
// import HomeScreen from './Screens/HomeScreen/HomeScreen'
// import LoginScreen from './Screens/LoginScreen/LoginScreen'
// import { createAppContainer } from 'react-navigation';


//   const AccountNavigator = createStackNavigator({  
//     Splash :{
//             screen:SplashScreen, 
//         },  
//         LoginScreen :{screen:LoginScreen},
        
//         HomeNavigator: HomeNavigator,
        
//           navigationOptions:{
//               headerShown: false,  
//       },

//     })            
//     const HomeNavigator = createStackNavigator({  
//             HomeScreen:{
//                 screen:HomeScreen,
//                 navigationOptions:{
//                     headerShown: false,
                  
//                 }
//             },
//         })      


// const MainNavigation = createStackNavigator();
// export default createAppContainer(AccountNavigator);

