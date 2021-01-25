import axios from 'axios'
import ApiResultModel from '../models/ApiResultModel'
import Constant from '../Common/Constants'
import LoginModel from '../models/LoginModel'
import GroupModel from '../models/GroupModel'
import PhysicalSiteNamesModel from '../models/PhysicalSiteNamesModel'
import OperatingHoursModel from '../models/OperatingHoursModel'
import UserProfileModel from '../models/UserProfileModel'
const loginApi = (data,response) => {


 return axios.post(Constant.domain + Constant.LoginEndPoint, {
    "email": data.usernameText,
    "password": data.passwordText,
   })
    .then(function (response) {
     
     if(response.data.data){
      let operation_hours=[]
      let physical_sitenames=[]   
      let userprofile = new UserProfileModel(response.data.data.userprofile)
      let group =new GroupModel(response.data.data.group)

       response.data.data.operation_hours.forEach(element => {
        let data =  new OperatingHoursModel(element)
        operation_hours.push(data)
      });
     
      response.data.data.physical_sitenames.forEach(element => {
        let data =  new PhysicalSiteNamesModel(element)
        physical_sitenames.push(data)
      });

       let loginApiModel = new LoginModel(response.data.data,userprofile,operation_hours,physical_sitenames,group)
    }
       let apiResult = new ApiResultModel(response.data.status,response.data.message)
    return apiResult
       
      })
    .catch(function (error) {
    return false 
    });

}
 
export default { loginApi}
