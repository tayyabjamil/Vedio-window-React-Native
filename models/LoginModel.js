
import GroupModel from '../models/GroupModel';
import PhysicalSiteNamesModel from '../models/PhysicalSiteNamesModel';
import OperatingHoursModel from '../models/OperatingHoursModel';
import UserProfileModel from '../models/UserProfileModel';

class LoginModel {
  id = String;
  username = String;
  email = String;
  role = String;
  business = String;
  distributor = Number;
  email_verified_at=String;
  api_token=String;
  status=Number;
  sleepmode=Number;
  logged_in=Number;
  email_verified=Number;
  user_type=Number;
  userprofile={};
  operation_hours=[];
  physical_sitenames=[];
  logo=String;
  group={}
  constructor(data) {
    this.id = data.id ?? '';
    this.username = data.username ?? '';
    this.email = data.email ?? '';
    this.role = data.role ?? '';
    this.business = data.business ?? '';
    this.distributor = data.distributor ?? '';
    this.email_verified_at = data.email_verified_at ?? '';
    this.api_token = data.api_token ?? '';
    this.status = data.status ?? '';
    this.sleepmode = data.sleepmode ?? '';
    this.logged_in = data.logged_in ?? '';
    this.email_verified = data.email_verified ?? '';
    this.user_type = data.user_type ?? '';
    this.userprofile = new UserProfileModel(data.userprofile);
    
     data.operation_hours.forEach(element => {
      let data =  new OperatingHoursModel(element)
      this.operation_hours.push(data)
    });
    
     data.physical_sitenames.forEach(element => {
      let data =  new PhysicalSiteNamesModel(element)
      this.physical_sitenames.push(data)
    });
    this.logo=data.logo;
    this.group= new GroupModel(data.group);
    
}
}
export default LoginModel;
