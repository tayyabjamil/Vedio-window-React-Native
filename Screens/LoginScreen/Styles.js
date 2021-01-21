import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default {
    mainContainer:{
// height:hp('100%'),
flex: 1,
margin: '7%',
  
    },
    loginText:{
        color:'black',
        fontSize:30,
        height:hp('15%'),
    },
    inputContainer:{
        height:hp('10%')
         },
         cacheContainer:{
height:hp('5%')
         },
    forgetPassword:{
        paddingTop:'2%',
        paddingBottom:'2%',
        color:'grey',
        alignSelf: 'flex-end',
        height:hp('5%')
    },
    autoLoginText:{
marginTop:'5%',
    height:hp('10%'),
    fontSize:14,
        color:'grey',
    },
    clickText:{  
  color:'black',
    },    
    underline: {
        textDecorationLine: 'underline',
        color:'black'
    },
    textCreate:{
        textDecorationLine: 'underline',
        color:'skyblue'
  
    },
    flex:{
        flexDirection:'row',
    },
    cacheLabel:{
marginLeft:'5%'
    },
    input:{
       marginBottom:'5%',  
        borderBottomWidth:2,
        borderBottomColor:'lightgrey',
        
    },
    textPassword:{
        width:'90%'
    },
    inputLabel:{
color:'grey'
    },
    loading:{
        width:'10%'
    },
    bottomContainer:{
height:hp('45%')
    }
}