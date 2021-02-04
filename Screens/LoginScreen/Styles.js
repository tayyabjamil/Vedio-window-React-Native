import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default {
   portraitStyles :{
height:hp('100%'),
width:wp('100%'),
padding:'7%'
   },
   
    landscapeStyles :{
      height:hp('100%'),
      width:hp('100%'),
      padding:'7%'
    },
  containerActivity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    margin: '7%',
  },
  loginText: {
    color: 'black',
     fontSize: RFValue(28),
   height: hp('15%'),
  },
  inputContainer: {
    height: hp('10%'),
  },
  cacheContainer: {
    height: hp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgetPassword: {
    paddingTop: 40,
    color: 'grey',
    fontSize: RFValue(13),
    alignSelf: 'flex-end',
    height: hp('9%'),
    alignItems:'center',
   
  },
  autoLoginText: {
    marginTop: '2%',
    height: hp('8%'),
    fontSize: RFValue(13),
    color: 'grey',
  },
  autologinWidth:{
width:wp('80%')
  },
  noAccountView:{
    paddingTop: '4%',
    height: hp('8%'),
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
  bottomContainer: {
    height: hp('45%'),
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems:'center',
    height: hp('7%'),
  },
  checkBoxLabel: {
    fontSize: RFValue(13),
  
  },
  checkBox: {
    width:50,
  },
};
