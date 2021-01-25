class GroupModel {
    id = String;
    business_id = Number;
    name = String;
    url = String;
    secret = String;
    call_id = Number;
    urlChanged=String;
    roomName=String;
    status=Number;
    constructor(data) {
      this.id = data.id ?? '';
      this.business_id = data.business_id ?? '';
      this.name = data.name ?? '';
      this.url = data.url ?? '';
      this.secret = data.secret ?? '';
      this.call_id = data.call_id ?? '';
      this.urlChanged = data.urlChanged ?? '';
      this.roomName = data.roomName ?? '';
      this.status = data.status ?? '';
    
  }
  }
  export default GroupModel;
  