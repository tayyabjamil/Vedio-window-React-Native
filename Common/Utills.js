import Constant from '../Common/Constants'
const clearCache = ()=>{
    Constant.LocalStore.removeItem('autoLogin');
    Constant.LocalStore.removeItem('rememberLogin');
    Constant.LocalStore.removeItem('usernameText');
    Constant.LocalStore.removeItem('passwordText');
 
}
export default {clearCache} 
