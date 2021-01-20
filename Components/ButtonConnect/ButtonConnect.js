import React ,{useEffect}from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
import Styles from './Styles'

const ButtonSignIn = props =>{ 
    
  useEffect(()=>{
    console.log(props.navigation)
})
    return (
        <View style={Styles.btnView}>
        <TouchableOpacity onPress={props.data}
          style={Styles.btnContainer}
 
          underlayColor='#fff'
           >
          <Text style={Styles.btnText}>{props.btnLabel} </Text>
        </TouchableOpacity>
        
        </View>
    )
}
export default ButtonSignIn