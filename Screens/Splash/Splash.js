import React, {useEffect,useState} from 'react'
import { View, Image,  } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './Styles'

const Splash =(props)=>{
    useEffect(()=>{
  gotoHomeScreen();
 })
   

   const gotoHomeScreen = async() => {
    const rememberLogin = await AsyncStorage.getItem('rememberLogin')
    const autoLogin = await AsyncStorage.getItem('autoLogin')
  
    setTimeout(async() => {
       
        if(rememberLogin=="true"){
            props.navigation.navigate('HomeScreen')
        
        }
      
       if(autoLogin=="true"){
        props.navigation.navigate('LoginScreen')
    
      }
      if(autoLogin==null && rememberLogin ==null){
        props.navigation.navigate('LoginScreen')
      }
    }, 500)
      }
        return (
            <View style={Styles.container}>
            </View>
        )
    }

export default Splash;