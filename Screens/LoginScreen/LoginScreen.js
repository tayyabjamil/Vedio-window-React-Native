import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Styles from './Styles';
import TextField from '../../Components/TextField/textField';
import ButtonConnect from '../../Components/ButtonConnect/ButtonConnect';
import Validations from '../../Common/Validations';
import Constant from '../../Common/Constants';
import Api from '../../ApiCall/LoginApi';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage'
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameText: '',
      passwordText: '',
      rememberLogin: false,
      autoLogin: false,
      showPassword: true,
      timer: 5
    };
  }
 async componentDidMount(){
    const autoLogin = await AsyncStorage.getItem('autoLogin')
   if(autoLogin=="true"){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
   }
  }
  
  componentDidUpdate(){
    if(this.state.timer === 0){ 
      this.handleSubmit()
 
      clearInterval(this.interval);
     
    }
  }
  
  
  parentCallBackFunction = (text, type) => {
    if (type === Constant.username) {
      this.setState({usernameText: text});
    } else if (type === Constant.password) {
      this.setState({passwordText: text});
    }
  };

  isFormFilled() {
    let checkPassword = Validations.checkPassword(this.state.passwordText);
    let checkUsername = Validations.checkUsername(this.state.usernameText);
    if (checkUsername && checkPassword) {
      return true;
    }
    if (!checkUsername) {
      Alert.alert('invalid username');
    } else if (!checkPassword) {
      Alert.alert('invalid password');
    }
    return false;
  }
  handleSubmit = async () => {
    if (this.isFormFilled()) {
      console.log(this.state.emailText + this.state.passwordText);
      Api.loginApi(this.state).then((response) => {
        if (response.code == 200) {
          this.props.navigation.navigate('HomeScreen')
          alert(response.message);
        } else {
          AsyncStorage.setItem('token','123456')
          if(this.state.autoLogin==true){
          AsyncStorage.setItem('autoLogin',"true")
        }
        if(this.state.rememberLogin==true){
 
        AsyncStorage.setItem('rememberLogin',"true")
        }
          alert(response.message);
          this.props.navigation.navigate('HomeScreen')
          
        }
      });
    } else {
    }
  };
  cancelAutoLogin=()=>{
    AsyncStorage.removeItem('autoLogin')
      
  }
  showPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  
  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <KeyboardAvoidingScrollView>
          <Text style={Styles.loginText}>Video Window</Text>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputLabel}>Username</Text>
            <View style={Styles.input}>
              <TextField
                type={Constant.username}
                parentCallBack={this.parentCallBackFunction}
              />
            </View>
          </View>

          <View style={Styles.inputContainer}>
            <Text style={Styles.inputLabel}>Password</Text>

            <View style={Styles.input}>
              <View style={Styles.flex}>
                <View style={Styles.textPassword}>
                  <TextField
                    secureTextEntry={this.state.showPassword}
                    type={Constant.password}
                    parentCallBack={this.parentCallBackFunction}
                  />
                </View>
                <TouchableOpacity onPress={() => this.showPassword()}>
                  <Image
                    source={require('../../assets/images/visibility.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={Styles.forgetPassword}>Forgot Password ?</Text>

          <View style={Styles.checkBoxContainer}>
            <View style={Styles.flex}>
              <CheckBox
                style={Styles.checkBox}
                disabled={false}
                value={this.state.rememberLogin}
                onValueChange={() =>   this.setState({rememberLogin: true})
              }
              />
              <Text style={Styles.checkBoxLabel}>{'Remember Login'}</Text>
            </View>
          </View>

          <View style={Styles.checkBoxContainer}>
            <View style={Styles.flex}>
              <CheckBox
                style={Styles.checkBox}
                disabled={false}
                value={this.state.autoLogin}
                onValueChange={(newValue) =>
                  this.setState({autoLogin: true})
                }
              />
              <Text style={Styles.checkBoxLabel}> {'Auto Login'} </Text>
            </View>
          </View>

          <View style={Styles.cacheContainer}>
            <View style={Styles.flex}>
              <View style={Styles.cacheImage}>
                <Image source={require('../../assets/images/cache.png')} />
              </View>
              <Text style={Styles.cacheLabel}>Clear cache</Text>
            </View>
          </View>
          <Text style={Styles.autoLoginText}>
            <Text>
              Auto-Login will be triggered in  {this.state.timer}  seconds,if you would like to
              connect now then hit connect else
            </Text>
            <TouchableOpacity onPress={()=>this.cancelAutoLogin()}>
            <Text style={Styles.underline} > Click here </Text>
            </TouchableOpacity>
            <Text>to cancel auto login</Text>
          </Text>
          <ButtonConnect
            btnLabel={'Connect'}
            navigation={this.props.navigation}
            data={this.handleSubmit}
          />
          <Text style={Styles.autoLoginText}>
            <Text>Dont have an account ? </Text>
            <Text style={Styles.textCreate}>Create</Text>
          </Text>
        </KeyboardAvoidingScrollView>
      </SafeAreaView>
    );
  }
}
