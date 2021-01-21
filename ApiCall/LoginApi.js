import axios from 'axios'
import AccountModel from '../models/AccountModel'
import ApiResultModel from '../models/ApiResultModel'
import Constant from '../Common/Constants'

const loginApi = (data,response) => {


 return axios.post(Constant.domain + Constant.LoginEndPoint, {
    "email": data.usernameText,
    "password": data.passwordText,
   })
    .then(function (response) {

      if (response) {
        // let dataModel = new AccountModel(response.data.data)
        let apiResult = new ApiResultModel(
          // response.data.code, 
          response.data.message,
          // dataModel
          )
       return apiResult
      }

    })
    .catch(function (error) {
    return false 
    });

}
 
export default { loginApi}
