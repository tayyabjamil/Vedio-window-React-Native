import AsyncStorage from '@react-native-async-storage/async-storage';

const clearCache = ()=>{
    AsyncStorage.removeItem('autoLogin');
    AsyncStorage.removeItem('rememberLogin');
    AsyncStorage.removeItem('usernameText');
    AsyncStorage.removeItem('passwordText');
 
}
export default {clearCache} 
