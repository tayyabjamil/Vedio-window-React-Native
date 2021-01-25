class OperatingHoursModel {
    id = Number;
    user_id = Number;
    day = Number;
    status = Number;
    on_time = Number;
    off_time = Number;
    on_minutes = Number;
    off_minutes = Number;
  
    constructor(data) {
      this.id = data.id ?? '';
      this.user_id = data.user_id ?? '';
      this.day = data.day ?? '';
      this.status = data.status ?? '';
      this.on_time = data.on_time ?? '';
      this.off_time = data.off_time ?? '';
      this.on_minutes = data.on_minutes ?? '';
      this.off_minutes = data.off_minutes ?? '';
    
  }
  }
  export default OperatingHoursModel;
  