import React, { useState ,useEffect} from 'react'
import { TextInput, View, Image,Text ,TouchableOpacity,Dimensions} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
// import Colors from '../../Common/Colors'
import Styles from './Styles'
const TextField = props => {
const[deviceType,setdeviceType]=useState('')
const[deviceHeight,setdeviceHeight]=useState(Dimensions.get('window').height)
const[deviceWidth,setdeviceWidth]=useState(Dimensions.get('window').width)
 
useEffect(() => {
    const deviceType= Dimensions.get('window').width
    if(deviceType<700){
setdeviceType("mobile")
    }else{
      setdeviceType("tab")
    }
    console.log(deviceType)
  }, [])

 const getOrientation=() =>{
   setdeviceHeight(Dimensions.get('window').height)
   setdeviceWidth(Dimensions.get('window').width)
   
  }

  const [showPassword,setShowPassword]=useState(true)
    const handleText = (text) => {
                props.parentCallBack(text,props.type)  
    }
    return (
        <View style={Styles.inputContainer} 
          onLayout={getOrientation}   
        >
        <Text style={Styles.labelText}>{props.label}</Text>
       <View style={Styles.input}>
         <View style={Styles.flex}>
        
          <TouchableWithoutFeedback  onPress={handleText} style={{width:deviceWidth*0.76}

          }>
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
                </TouchableWithoutFeedback>
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
            {deviceType == "mobile"   &&
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