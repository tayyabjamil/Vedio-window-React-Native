import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Dimensions} from 'react-native';

export default {  
    btnView:{
        minHeight:Dimensions.get('window').height*0.08,
        height:Dimensions.get('window').height*0.08,
        
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











//     import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   Alert,
//   TouchableOpacity,
//   SafeAreaView,
//   ActivityIndicator,
//   Dimensions,
// } from 'react-native';
// import Styles from './Styles';
// import ButtonConnect from '../../Components/ButtonConnect/ButtonConnect';
// import Validations from '../../Common/Validations';
// import Constant from '../../Common/Constants';
// import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
// import CheckBox from '@react-native-community/checkbox';
// import TextFieldComponent from '../../Components/TextField/textField';
// import * as loginActions from '../../ReduxStore/Actions/loginAction';
// import {connect} from 'react-redux';
// import Utils from '../../Common/Utills';
// import Orientation from 'react-native-orientation';
// import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timer: 49,
//       stopTimer: false,
//       screen: Dimensions.get('window'),
//       screenType: '',
//       screenWidth: Dimensions.get('window').width,
//       screenHeight: Dimensions.get('window').height,
//       deviceOrientation:Orientation.getInitialOrientation(),
//       isPortrait: false,
//     };
  
//   }

//   componentWillMount() {
//     // The getOrientation method is async. It happens sometimes that
//     // you need the orientation at the moment the JS runtime starts running on device.
//     // `getInitialOrientation` returns directly because its a constant set at the
//     // beginning of the JS runtime.

//     const initial = Orientation.getInitialOrientation();
//     if (initial === 'PORTRAIT') {
//       this.setState({isPortrait: true})
//         } else {
//           this.setState({isPortrait: false})
//             }
//   }

//   async componentDidMount() {
//     console.log('device orientation is C  ',Orientation.getInitialOrientation())
//     // if(Orientation.getInitialOrientation() === 'PORTRAIT'){
     
//     //   this.setState({isPortrait: true})
//     // }
//     console.log(this.state.deviceOrientation)
//     Dimensions.addEventListener("change", this._orientationDidChange);
//     // this.getOrientation();
//     // console.log(this.state.screenType);
//     Constant.LocalStore.getItem(Constant.username).then((name) => {
//       this.props.storeInputData(name, Constant.username);
//     });

//     Constant.LocalStore.getItem(Constant.password).then((password) => {
//       this.props.storeInputData(password, Constant.password);
//     });
//     this.counterStart();
//   }
//   counterStart = async () => {
//     Dimensions.removeEventListener('change');
//     const autoLogin = await Constant.LocalStore.getItem(Constant.autoLogin);

//     if (autoLogin == 'true') {
//       this.interval = setInterval(
//         () => this.setState((prevState) => ({timer: prevState.timer - 1})),
//         1000,
//       );
//     }
//   };

//   componentDidUpdate() {
//     Orientation.addOrientationListener(this._orientationDidChange);
//     this.props.clearErrorApi();

//     if (this.state.stopTimer == true) {
//       clearInterval(this.interval);
//     }
//     if (this.state.timer === 0) {
//       clearInterval(this.interval);
//       this.setState({timer: 49});
//       this.handleSubmit();

//       if (this.props.successLoginApi !== Constant.LoggedIn) {
//         this.counterStart();
//       }
//     }
//   }
//   getOrientation() {
//     console.log('get oridenataop');
//     this.setState({
//       screenWidth: Dimensions.get('window').width,
//       screenHeight: Dimensions.get('window').height,
//     });
//     Dimensions.addEventListener('change');
//     console.log(
//       'height' + this.state.screenHeight + 'width' + this.state.screenWidth,
//     );
//   }
//   componentWillUnmount() {
//     // Dimensions.removeEventListener("change", this.onChange);
//   }
  
//   isFormFilled() {
//     let checkPassword = Validations.checkPassword(this.props.passwordText);
//     let checkUsername = Validations.checkUsername(this.props.usernameText);

//     if (checkUsername && checkPassword) {
//       return true;
//     }
//     if (!checkUsername) {
//       Alert.alert(Constant.InvalidUsername);
//     } else if (!checkPassword) {
//       Alert.alert(Constant.InvalidPassword);
//     }
//     return false;
//   }
//   handleSubmit = async () => {
//     if (this.isFormFilled()) {
//       this.props.callApi();
//     }
//   };

//   cancelAutoLogin = () => {
//     this.setState({stopTimer: !this.state.stopTimer});
//   };
//   clearCache = () => {
//     this.props.clearCache();
//     Utils.clearCache();
//   };
//   navigateHome = () => {
//     this.props.navigation.navigate(Constant.HomeRoute);
//   };
  
//   _orientationDidChange = (orientation) => {
//     if (orientation === 'LANDSCAPE') {
//       this.setState({deviceOrientation:'LANDSCAPE', isPortrait: false},()=>{
//         console.log('height is: ', heightPercentageToDP('100%'));
//         console.log('width is: ', widthPercentageToDP('100%'));

//       })
//       console.log('device orientation is B  ',this.state.isPortrait)
//     } else if (orientation === 'PORTRAIT') {
//       this.setState({deviceOrientation:'PORTRAIT', isPortrait: true},()=> {
//         console.log('height is: ', heightPercentageToDP('100%'));
//         console.log('width is: ', widthPercentageToDP('100%'));
//       })
//       console.log('device orientation is A  ',this.state.isPortrait)
//     }
//   }

//   render() {
//     const {screenWidth, screenHeight} = this.state;
//     return (
//       <SafeAreaView
//         // onLayout={this.getOrientation.bind(this)}
//         style={Styles.mainContainer}
//         style={
//               this.state.isPortrait
            
//             ? Styles.portraitStyles
//             : Styles.landscapeStyles
//         }>
//           <View style={{backgroundColor:'red', height: this.state.isPortrait ? heightPercentageToDP('100%') : widthPercentageToDP('50%'),width: this.state.isPortrait ? widthPercentageToDP('100%') : heightPercentageToDP('50%')}}/>
//         {/* {this.props.loading == true && (
//           <View style={Styles.containerActivity}>
//             <ActivityIndicator size="large" color="grey" />
//           </View>
//         )}

//         {this.props.loading == false && (
//           <KeyboardAvoidingScrollView>
//             <Text
//               style={
//                 this.state.isPortrait
//                   ? [Styles.loginText,Styles.portraitStylesHeights]
//                   : [Styles.loginText,Styles.landscapeStylesHeights]
//               }>
//               {Constant.LabelVideoWindow}
//             </Text>

//             <TextFieldComponent
//               value={this.props.usernameText}
//               type={Constant.username}
//               label={Constant.usernameLabel}
//               parentCallBack={(value, type) =>
//                 this.props.storeInputData(value, type)
//               }
//             />

//             <TextFieldComponent
//               value={this.props.passwordText}
//               type={Constant.password}
//               label={Constant.passwordLabel}
//               parentCallBack={(value, type) =>
//                 this.props.storeInputData(value, type)
//               }
//             />

//             <Text style={      this.state.isPortrait
            
//               ? [Styles.forgetPasswordPortrait,Styles.portraitStylesHeights]
//               : [Styles.forgetPasswordLandscape,Styles.landscapeStylesHeights]
//            }>
//               {Constant.LabelForgetPassword}
//             </Text>

//             <View
//             style={       this.state.isPortrait
            
//               ? [Styles.checkBoxContainer,Styles.portraitStylesHeights]
//               : [Styles.checkBoxContainer,Styles.landscapeStylesHeights]
//            }
//             >
//               <CheckBox
//                 style={Styles.checkBox}
//                 disabled={false}
//                 value={this.props.rememberLogin}
//                 onValueChange={() =>
//                   this.props.storeCheckBoxData(
//                     !this.props.rememberLogin,
//                     Constant.rememberLogin,
//                   )
//                 }
//               />
//              <TouchableOpacity onPress={()=>this.props.storeCheckBoxData(!this.props.rememberLogin,Constant.rememberLogin)}>
//               <Text style={Styles.checkBoxLabel}>
//                 {Constant.LabelRememberLogin}
//               </Text>
//               </TouchableOpacity>
//             </View>

//             <View 
            
//             style={
//                   this.state.isPortrait
            
//               ? [Styles.checkBoxContainer,Styles.portraitStylesHeights]
//               : [Styles.checkBoxContainer,Styles.landscapeStylesHeights]
//             }
//               >
//               <CheckBox
//                 style={Styles.checkBox}
//                 disabled={false}
//                 value={this.props.autoLogin}
//                 onValueChange={() =>
//                   this.props.storeCheckBoxData(
//                     !this.props.autoLogin,
//                     Constant.autoLogin,
//                   )
//                 }
//               />
//               <TouchableOpacity onPress={()=>this.props.storeCheckBoxData(!this.props.autoLogin,Constant.autoLogin)}>
            
//               <Text style={Styles.checkBoxLabel}>
//                 {Constant.LabelAutoLogin}{' '}
//               </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={       this.state.isPortrait
            
//               ? [Styles.cacheContainer,Styles.portraitStylesHeights]
//               : [Styles.cacheContainer,Styles.landscapeStylesHeights]
//            }>
//               <TouchableOpacity
//                 style={Styles.cacheImage}
//                 onPress={() => this.clearCache()}>
//                 <Image source={require('../../assets/images/cache.png')} />
//               </TouchableOpacity>
//               <Text style={Styles.checkBoxLabel}>
//                 {Constant.LabelClearCache}
//               </Text>
//             </View>
//             <Text style={  
//                    this.state.isPortrait
            
//               ? [Styles.autoLoginText,Styles.portraitStylesHeights]
//               : [Styles.autoLoginText,Styles.landscapeStylesHeights]
//            }>
//               <Text style={Styles.autologinWidth}>
//                 Auto-Login will be triggered in {this.state.timer} seconds,if
//                 you would like to connect now then hit connect else{' '}
//               </Text>
//               <Text
//                 style={Styles.underline}
//                 onPress={() => this.cancelAutoLogin()}>
//                 Click here{' '}
//               </Text>
//               <Text> to cancel auto login</Text>
//             </Text>
//             <ButtonConnect
//               btnLabel={'Connect'}
//               navigation={this.props.navigation}
//               data={this.handleSubmit}
//             />
//             <Text style={      this.state.isPortrait
            
//               ? [Styles.noAccountView,Styles.portraitStylesHeights]
//               : [Styles.noAccountView,Styles.landscapeStylesHeights]
//            }>
//               <Text>{Constant.LabelNoAccount}</Text>
//               <Text style={Styles.textCreate}>{Constant.LabelCreate}</Text>
//             </Text>
//           </KeyboardAvoidingScrollView>
//         )} */}
//       </SafeAreaView>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   if (state.loginReducer.error !== '') {
//     alert(state.loginReducer.error);
//   }
//   if (state.loginReducer.success == Constant.LoggedIn) {
//     ownProps.navigation.navigate(Constant.HomeRoute);
//   }

//   return {
//     stopTime: state.loginReducer.stopTime,
//     usernameText: state.loginReducer.usernameText,
//     passwordText: state.loginReducer.passwordText,
//     successLoginApi: state.loginReducer.success,
//     errorLoginApi: state.loginReducer.error,
//     loading: state.loginReducer.loading,
//     rememberLogin: state.loginReducer.rememberLogin,
//     autoLogin: state.loginReducer.autoLogin,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { 
//     storeInputData: (text, type) =>
//       dispatch(loginActions.storeInputData(text, type)),
//     storeCheckBoxData: (value, type) =>
//       dispatch(loginActions.storeCheckBoxData(value, type)),
//     callApi: () => dispatch(loginActions.callApi()),
//     clearCache: () => dispatch(loginActions.clearCache()),
//     stopTimer: (time) => dispatch(loginActions.stopTimer(time)),
//     clearErrorApi: () => dispatch(loginActions.clearErrorApi()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
// const portraitStyles = StyleSheet.create({});

// const landscapeStyles = StyleSheet.create({});
