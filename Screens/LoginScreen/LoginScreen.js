import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Styles from './Styles';
import TextField from '../../Components/TextField/textField';
import ButtonConnect from '../../Components/ButtonConnect/ButtonConnect';
import Validations from '../../Common/Validations';
import Constant from '../../Common/Constants';
import Api from '../../ApiCall/LoginApi';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextFieldComponent from '../../Components/TextField/textField';
import * as loginActions from '../../ReduxStore/Actions/loginAction';
import {connect} from 'react-redux';
import Utils from '../../Common/Utils'
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 15,
      stopTimer: false,
    };
  }
  async componentDidMount() {
    AsyncStorage.getItem('usernameText').then((name) => {
      this.props.storeInputData(name, Constant.username);
    });

    AsyncStorage.getItem('passwordText').then((password) => {
      this.props.storeInputData(password, Constant.password);
    });

    const autoLogin = await AsyncStorage.getItem('autoLogin');
    if (autoLogin == 'true') {
      this.interval = setInterval(
        () => this.setState((prevState) => ({timer: prevState.timer - 1})),
        1000,
      );
    }
  }

  componentDidUpdate() {
    if (this.state.stopTimer == true) {
      clearInterval(this.interval);
    }
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      this.setState({timer:15})
      this.handleSubmit();
    }
    if (this.props.successLoginApi == 'Logged in') {
      this.props.navigation.navigate('HomeScreen');
    }
    if (this.props.errorLoginApi !== '') {
      this.createTwoButtonAlert();
    }
  }
  createTwoButtonAlert = () =>
    Alert.alert(
      'Error',
      this.props.errorLoginApi,
      [
        {
          text: 'Cancel',
          onPress: () => this.props.clearErrorApi(),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.clearErrorApi()},
      ],
      {cancelable: false},
    );

  isFormFilled() {
    let checkPassword = Validations.checkPassword(this.props.passwordText);
    let checkUsername = Validations.checkUsername(this.props.usernameText);

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
      this.props.callApi();
    }
  };

  cancelAutoLogin = () => {
    this.setState({stopTimer: !this.state.stopTimer});
  };
  clearCache = () => {
    this.props.clearCache();
    Utils.clearCache()
   };
  navigateHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        {this.props.loading == true && (
          <View style={Styles.containerActivity}>
            <ActivityIndicator size="large" color="grey" />
          </View>
        )}

        {this.props.loading == false && (
          <KeyboardAvoidingScrollView>
            <Text style={Styles.loginText}>{Constant.LabelVideoWindow}</Text>
            <TextFieldComponent
              value={this.props.usernameText}
              type={Constant.username}
              label={Constant.usernameLabel}
              parentCallBack={(value,type)=>this.props.storeInputData(value,type)}
            />

            <TextFieldComponent
              value={this.props.passwordText}
              type={Constant.password}
              label={Constant.passwordLabel}
              parentCallBack={(value,type)=>this.props.storeInputData(value,type)}
            />
            <Text style={Styles.forgetPassword}>{Constant.LabelForgetPassword}</Text>

            <View style={Styles.checkBoxContainer}>
              <CheckBox
                style={Styles.checkBox}
                disabled={false}
                value={this.props.rememberLogin}
                onValueChange={() =>
                  this.props.storeCheckBoxData(
                    !this.props.rememberLogin,
                    Constant.rememberLogin,
                  )
                }
              />
              <Text style={Styles.checkBoxLabel}>{Constant.LabelRememberLogin}</Text>
            </View>

            <View style={Styles.checkBoxContainer}>
              <CheckBox
                style={Styles.checkBox}
                disabled={false}
                value={this.props.autoLogin}
                onValueChange={() =>
                  this.props.storeCheckBoxData(
                    !this.props.autoLogin,
                    Constant.autoLogin,
                  )
                }
              />
              <Text style={Styles.checkBoxLabel}> {Constant.LabelAutoLogin} </Text>
            </View>

            <View style={Styles.cacheContainer}>
              <TouchableOpacity
                style={Styles.cacheImage}
                onPress={() => this.clearCache()}>
                <Image source={require('../../assets/images/cache.png')} />
              </TouchableOpacity>
              <Text style={Styles.cacheLabel}>{Constant.LabelClearCache}</Text>
            </View>
            <Text style={Styles.autoLoginText}>
              <Text>
                Auto-Login will be triggered in {this.state.timer} seconds,if
                you would like to connect now then hit connect else 
              </Text>
              <Text
                style={Styles.underline}
                onPress={() => this.cancelAutoLogin()}>
                   Click here
              </Text>
              <Text> to cancel auto login</Text>
            </Text>
            <ButtonConnect
              btnLabel={'Connect'}
              navigation={this.props.navigation}
              data={this.handleSubmit}
            />
            <Text style={Styles.autoLoginText}>
              <Text>{Constant.LabelNoAccount}</Text>
              <Text style={Styles.textCreate}>{Constant.LabelCreate}</Text>
            </Text>
          </KeyboardAvoidingScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stopTime: state.loginReducer.stopTime,
    usernameText: state.loginReducer.usernameText,
    passwordText: state.loginReducer.passwordText,
    successLoginApi: state.loginReducer.success,
    errorLoginApi: state.loginReducer.error,
    loading: state.loginReducer.loading,
    rememberLogin: state.loginReducer.rememberLogin,
    autoLogin: state.loginReducer.autoLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeInputData: (text, type) =>
      dispatch(loginActions.storeInputData(text, type)),
    storeCheckBoxData: (value, type) =>
      dispatch(loginActions.storeCheckBoxData(value, type)),
    callApi: () => dispatch(loginActions.callApi()),
    clearCache: () => dispatch(loginActions.clearCache()),
    stopTimer: (time) => dispatch(loginActions.stopTimer(time)),
    clearErrorApi: () => dispatch(loginActions.clearErrorApi()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
