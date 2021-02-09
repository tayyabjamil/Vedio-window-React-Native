
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Dimensions} from 'react-native';

export default {
 inputView:{ 
  
    },
    labelText:{
        fontSize: RFValue(13),
   
    },
    placeholderText:{
        fontSize: RFValue(12),
        
    },
    inputContainer:{
        height: Dimensions.get('window').height*0.09,
        minHeight:Dimensions.get('window').height*0.09,
        marginTop:30,
          },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'lightgrey',
        // marginBottom:15
        
    },
    flex:{
        flexDirection:'row',
    },
    inputWidth:{
      width: Dimensions.get('window').width*0.8
     },
     portraitStyles:{
backgroundColor:'red',
width: Dimensions.get('window').height*0.4
   
     },
   landscapeStyles:{
  
    width: Dimensions.get('window').width*0.8,
   
    backgroundColor:'green'
   },
errorLabel:{
color:'red'
},
errorView:{
    marginLeft:20
}
}
