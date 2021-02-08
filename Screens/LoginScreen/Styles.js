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
      height: Dimensions.get('window').height*0.08,
     
      },   
        landscapeStylesHeights :{
          height: Dimensions.get('window').width*0.08,
          
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
     height: Dimensions.get('window').height*0.3
 
  },
  inputContainer: {
    height: hp('10%'),
  },
  cacheContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgetPasswordPortrait: {
    marginTop: 30,
    color: 'grey',
    fontSize: RFValue(13),
    alignSelf: 'flex-end',
    alignItems:'center',
   
  },
  forgetPasswordLandscape: {
    marginTop: 30,
    color: 'grey',
    fontSize: RFValue(13),
    alignSelf: 'flex-end',
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
    height: Dimensions.get('window').height*0.3,
    marginTop: 25,
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
    height: Dimensions.get('window').height*0.1
  },
  checkBoxLabel: {
    fontSize: RFValue(13),
  
  },
  checkBox: {
    width:50,
  },
};
