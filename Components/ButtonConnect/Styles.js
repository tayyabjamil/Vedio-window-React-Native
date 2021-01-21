import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default {  
    btnView:{
        height:hp('10%'),
        marginTop:'5%',
    width:wp('33%'),
    },
    btnContainer:{
        paddingTop:'10%',
        paddingBottom:'10%',
        backgroundColor:'skyblue',
        borderRadius:6,
        borderColor: 'grey'
      },
      btnText:{
          fontWeight:'bold',
          color:'white',
          textAlign:'center',
          paddingLeft : '5%',
          paddingRight : '5%',

      }
    }