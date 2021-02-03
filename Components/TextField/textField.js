import React, { useState ,useEffect} from 'react'
import { TextInput, View, Image,Text ,TouchableOpacity,Dimensions} from 'react-native'
// import Colors from '../../Common/Colors'
import Styles from './Styles'
const TextField = props => {
const[deviceType,setdeviceType]=useState('')
  useEffect(() => {
    const deviceType= Dimensions.get('window').width
    if(deviceType<500){
setdeviceType("mobile")
    }else{
      setdeviceType("tab")
    }
    console.log(deviceType)
  }, [])
  const [showPassword,setShowPassword]=useState(true)
    const handleText = (text) => {
                props.parentCallBack(text,props.type)  
    }
    return (
        <View style={Styles.inputContainer}>
        <Text style={Styles.labelText}>{props.label}</Text>
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
                    style={Styles.placeholderText}
                ></TextInput>
             }
             
             {props.type=="username" &&
               <TextInput 
                    placeholder={props.placeholder}
                    placeholderTextColor={'gray'}
                    onChangeText={handleText} 
                    value={props.value}
                    style={Styles.placeholderText}
             
                ></TextInput>
             }
                </View>
            {props.type == "password" &&
            <View>
            {showPassword == true && 
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
           {deviceType == "mobile" &&
            <Image 
              source={require('../../assets/images/eye.png')}
            />
           }
            {deviceType == "tab" &&
            <Image 
              source={require('../../assets/images/eye-open-large.png')}
            />
           }
            </TouchableOpacity>
        }

        {showPassword == false &&
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            {deviceType == "mobile" &&
            <Image 
              source={require('../../assets/images/eyeclose.png')}
            />
           }
            {deviceType == "tab" &&
            <Image 
              source={require('../../assets/images/eye-closed-large.png')}
            />
           }</TouchableOpacity>
         } 
         </View>
        }
     </View> 
     </View>

      </View>
    
    )
}
export default TextField