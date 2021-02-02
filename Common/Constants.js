import AsyncStorage from '@react-native-async-storage/async-storage';

const Constants = {
    domain : 'https://manage-dev.videowindow.com/api/',
    LoginEndPoint:'apilogin',
    username:'username',
    password:'password',
    passwordLabel:'Password',
    usernameLabel:'Username',
    rememberLogin:'rememberLogin',
    autoLogin:'autoLogin',
    LabelRememberLogin:'Remember Login',
    LabelAutoLogin:'Auto Login',
    LabelClearCache:'Clear Cache',
    LabelForgetPassword:'Forget Password ?',
    LabelNoAccount:'Dont have an account ? ',
    LabelCreate:'Create',
    LabelVideoWindow: 'Video Window',
    LabelLogout:'Logout',
    LocalStore:AsyncStorage,
    HomeRoute:'HomeScreen',
    LoginRoute:'LoginScreen',
    LoggedIn:'Logged in',
    InvalidUsername:'invalid username',
    InvalidPassword:'invalid password',
    Cancel:'Cancel',
    Ok:'OK',
    timer:49,
  
}
 export default Constants