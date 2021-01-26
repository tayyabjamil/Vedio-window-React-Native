
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default {
 inputView:{ 
 height:hp('5%')
 
    },
    inputContainer:{
marginTop:10
    },
    input:{
        height:hp('5%'),
        borderBottomWidth:2,
        borderBottomColor:'lightgrey',
        
    },
    flex:{
        flexDirection:'row',
    },
    inputWidth:{
        width:'90%'
    },
   
errorLabel:{
color:'red'
},
errorView:{
    marginLeft:20
}
}
