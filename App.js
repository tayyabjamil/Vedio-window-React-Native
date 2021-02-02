
import {SafeAreaView} from 'react-native';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

import React, { Component } from 'react';
import MainNavigation from './Navigation/MainNavigation';

import {Provider} from 'react-redux';
import configureStore from './ReduxStore/store';
const store = configureStore()

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
  <Provider store={store}>
     
<SafeAreaView style={{flex: 1}}>
<MainNavigation />
</SafeAreaView>
   </Provider>
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

