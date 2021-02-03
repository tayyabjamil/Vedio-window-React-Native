
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
 inputView:{ 
  
    },
    labelText:{
        fontSize: RFValue(13),
   
    },
    placeholderText:{
        fontSize: RFValue(12),
        // backgroundColor:'green'
   
    },
    inputContainer:{
        height:hp('6%'),
        marginTop:30,
          },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'lightgrey',
        
    },
    flex:{
        flexDirection:'row',
    },
    inputWidth:{
        width:'94%'
    },
   
errorLabel:{
color:'red'
},
errorView:{
    marginLeft:20
}
}
