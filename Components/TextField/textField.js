import React, { useState } from 'react'
import { TextInput, View, Image,Text ,TouchableOpacity} from 'react-native'
// import Colors from '../../Common/Colors'
import Styles from './Styles'
const TextField = props => {
  const [showPassword,setShowPassword]=useState(true)
    const handleText = (text) => {
                props.parentCallBack(text,props.type)  
    }
    return (
        <View style={Styles.inputContainer}>
        <Text style={Styles.inputLabel}>{props.label}</Text>
       <View style={Styles.input}>
         <View style={Styles.flex}>
        
          <View style={Styles.inputWidth}>
             {props.type=="password" &&
               <TextInput 
                    secureTextEntry={showPassword}
                    placeholder={props.placeholder}
                    placeholderTextColor={'gray'}
                    onChangeText={handleText} 
                    value={props.value} 
                ></TextInput>
             }
             
             {props.type=="username" &&
               <TextInput 
                    placeholder={props.placeholder}
                    placeholderTextColor={'gray'}
                    onChangeText={handleText} 
                    value={props.value} 
                ></TextInput>
             }
                </View>
            {props.type == "password" &&
            <View>
            {showPassword == true && 
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image
              source={require('../../assets/images/eye.png')}
            />
          </TouchableOpacity>
        }
        {showPassword == false &&
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image
              source={require('../../assets/images/eyeclose.png')}
            />
          </TouchableOpacity>
         } 
         </View>
        }
     </View> 
     </View>

      </View>
    
    )
}
export default TextField