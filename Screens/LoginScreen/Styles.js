import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp, 
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Dimensions} from 'react-native';

export default {
   portraitStyles :{
  flex: 1,
  flexDirection:'column',
  padding: '7%',
  },
   
    landscapeStyles :{
      flex: 1,  
      flexDirection:'row',
      padding: '7%',
    
    },
    
    portraitStylesHeights :{
      minHeight:hp('8%'),
      height:'8%',
    
      },   
        landscapeStylesHeights :{
          minHeight:hp('20%'),
          height:'20%',
        },
  containerActivity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    
    margin: '7%',
  },
  loginText: {
     color: 'black',
     fontSize: RFValue(28),
     minHeight: wp('15%'),
     height:wp('15%'),
   
  },
  
  inputContainer: {
    height: hp('20%'),
    
  },
  cacheContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight:wp('15%'),
    height:wp('15%')
  },
  forgetPassword: {
    paddingTop: 20,
    color: 'grey',
    fontSize: RFValue(13),
    alignSelf: 'flex-end',
    minHeight: '5%',
    alignItems:'center',
   
  },
  autoLoginText: {
    height:wp('10%'),
    minHeight:wp('10%'),
    fontSize: RFValue(13),
    color: 'grey',
  },
  autoLoginText: {
    height:wp('10%'),
    minHeight:wp('10%'),
    fontSize: RFValue(13),
    color: 'grey',
  },
  autologinWidth:{
width:wp('80%')
  },
  noAccountView:{
    
    paddingTop:15,
    height: wp('40%'),
    fontSize: RFValue(13),
    color: 'grey',
   
  },
  clickText: {
    color: 'black',
  },
  underline: {
    textDecorationLine: 'underline',
    color: 'black',
  },
  textCreate: {
    textDecorationLine: 'underline',
    color: 'skyblue',
  },
  activityIndicator:{
    color:'grey',
    size:'large'
  },
  cacheImage: {
    width: 50,
  },

  input: {
    height: hp('5%'),
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  textPassword: {
    width: '90%',
  },
  inputLabel: {
    color: 'grey',
  },
  loading: {
    width: '10%',
  },
 
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems:'center',
    minHeight:('10%'),
    height:('10%')
  
  },
  checkBoxLabel: {
    fontSize: RFValue(13),
  
  },
  checkBox: {
    width:50,
  },
};
