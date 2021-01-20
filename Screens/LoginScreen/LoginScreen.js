import React, {Component} from 'react';
import {View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import Styles from './Styles';
import TextField from '../../Components/TextField/textField';
import ButtonConnect from '../../Components/ButtonConnect/ButtonConnect';
import Validations from '../../Common/Validations';
import Constant from '../../Common/Constants';
import CheckBoxLogin from '../../Components/CheckBoxLogin/CheckBoxLogin';
import Api from '../../ApiCall/LoginApi'
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameText: '',
      passwordText: '',
      rememberLogin: false,
      auto_login: false,
      showPassword: true,
    };
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
          
           AsyncStorage.setItem('token',response.dataModel.jwt_token)
          this.props.navigation.navigate('Home')
          alert(response.message)
        } else {
          alert("Failed Login")
        }

      });

    
    } else {
    }
  };
  showPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text style={Styles.loginText}>Video Window</Text>
        <Text style={Styles.inputLabel}>Username</Text>
        <View style={Styles.input}>
          <TextField
            type={Constant.username}
            parentCallBack={this.parentCallBackFunction}
          />
        </View>
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
              <Image source={require('../../assets/images/visibility.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={Styles.forgetPassword}>Forgot Password ?</Text>
        <CheckBoxLogin checkBoxLabel={'Remember Login and Settings'} />
        <CheckBoxLogin checkBoxLabel={'Auto-Login'} />

        <View style={Styles.flex}>
          <View style={Styles.checkBox}>
            <Image source={require('../../assets/images/cache.png')} />
          </View>
          <Text style={Styles.cacheLabel}>Clear cache</Text>
        </View>

        <Text style={Styles.autoLoginText}>
          <Text>
            Auto-Login will be triggered in 49 seconds,if you would like to
            connect now then hit connect else
          </Text>
          <Text style={Styles.underline}>Click here </Text>
          <Text>to cancel auto login</Text>
        </Text>
        <ButtonConnect btnLabel={'Connect'} data={this.handleSubmit} />
        <Text style={Styles.autoLoginText}>
          <Text>Dont have an account ? </Text>
          <Text style={Styles.textCreate}>Create</Text>
        </Text>
      </View>
    );
  }
}
