class PhysicalSiteNamesModel {
    id = String;
    user_id = Number;
    name = String;
    email = String;
    constructor(data) {
      this.id = data.id ?? '';
      this.user_id = data.user_id ?? '';
      this.name = data.name ?? '';
      this.email = data.email ?? '';
    
  }
  }
  export default PhysicalSiteNamesModel;
  