class UserProfileModel {
    id = Number;
    user_id = Number;
    roomName = String;
    first_name = String;
    last_name = String;
    city = Number;
    phone=String;
    country=String;
    state=Number;
    timezone=String;
    group=Number;
    site_name=String
    floor=String;
    nickname=String;
    sip_calling_mode=Number;
    whiteboard=Number
    constructor(data) {
      this.id = data.id ?? '';
      this.user_id = data.user_id ?? '';
      this.roomName = data.roomName ?? '';
      this.first_name = data.first_name ?? '';
      this.last_name = data.last_name ?? '';
      this.city = data.city ?? '';
      this.phone = data.phone ?? '';
      this.country = data.country ?? '';
      this.state = data.state ?? '';
      this.timezone = data.timezone ?? '';
      this.site_name = data.site_name ?? '';
      this.floor = data.floor??'';
      this.nickname = data.nickname ?? '';
      this.sip_calling_mode = data.sip_calling_mode ?? '';
      this.whiteboard = data.whiteboard??'';
  }
  }
  export default UserProfileModel;
  