import React, { useState } from 'react'
import { TextInput, View, Image } from 'react-native'
// import Colors from '../../Common/Colors'
import Styles from './Styles'
const TextField = props => {
  
    const handleText = (text) => {
                props.parentCallBack(text,props.type)  
    }
    return (
        <View style={Styles.inputView}>
            <View style={Styles.input}>
                <TextInput 
                  secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                    placeholderTextColor={'gray'}
                    onChangeText={handleText}  
                ></TextInput>
               
            </View>
        </View>
    )
}
export default TextField