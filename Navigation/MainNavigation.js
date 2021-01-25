import * as React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SplashScreen from '../Screens/Splash/Splash';

const AccountNavigator = createStackNavigator({
  LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      }
      
    },
  
});
const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const SplashNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const MainNavigator = createDrawerNavigator({
  Splash: SplashNavigator,
  Account: AccountNavigator,
  Home: HomeNavigator,
});
export default createAppContainer(MainNavigator);
