import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {  
    btnView:{
        height:hp('8%'),
        marginTop:20,
    width:150,
    },
    btnContainer:{
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'skyblue',
        borderRadius:6,
        borderColor: 'grey'
      },
      btnText:{
        fontSize: RFValue(12),
        fontWeight:'bold',  
         
          color:'white',
          textAlign:'center',
          paddingLeft : 5,
          paddingRight : 5,

      }
    }