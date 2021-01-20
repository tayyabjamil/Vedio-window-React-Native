import React ,{useEffect, useState}from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
import Styles from './Styles'
import CheckBox from '@react-native-community/checkbox';

const CheckBoxLogin = props =>{ 
    
    return (
        <View style={Styles.checkBoxContainer}>
        <View style={Styles.flex}>
          <CheckBox
            style={Styles.checkBox}
            disabled={false}
          />
          <Text style={Styles.checkBoxLabel}>
            {props.checkBoxLabel}
          </Text>
        </View>
      </View>  
    
        )
}
export default CheckBoxLogin