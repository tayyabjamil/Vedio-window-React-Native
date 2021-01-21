

import * as React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import VedioCallScreen from '../Screens/VedioCall/VedioCall'
const AccountNavigator = createStackNavigator({  
    LoginScreen :{
            screen:LoginScreen,
            navigationOptions:{
                headerShown: false,  
              
            } 
        },
    })            
    const CallNavigator = createStackNavigator({  
            vedioCall:{
                screen:VedioCallScreen,
                navigationOptions:{
                    headerShown: false,
                  
                }
            },
        })            
                  
const MainNavigator = createDrawerNavigator({
    Account:AccountNavigator,
    VedioCall:CallNavigator,
    
})
export default createAppContainer(MainNavigator)