
import GroupModel from '../models/GroupModel';
import PhysicalSiteNamesModel from '../models/PhysicalSiteNamesModel';
import OperatingHoursModel from '../models/OperatingHoursModel';
import UserProfileModel from '../models/UserProfileModel';

class LoginModel {
  id : String='';
  username : String='';
  email : String='';
  role : String='';
  business : String='';
  distributor : Number=0;
  email_verified_at:String='';
  api_token:String='';
  status:Number=0;
  sleepmode:Number=0;
  logged_in:Number=0;
  email_verified:Number=0;
  user_type:Number=0;
  userprofile:UserProfileModel={};
  operation_hours:OperatingHoursModel[]=[];
  physical_sitenames:PhysicalSiteNamesModel[]=[];
  logo=String='';
  group=GroupModel={}
}
export default LoginModel;
