class ApiResultModel{
code = Number
message = String
jwt_token = String;
dataModel ={};
    constructor(message) {
        this.message = message ?? '';
  
    //     this.code = code ?? '';
    // this.dataModel = detailModel
    // this.jwt_token = detailModelArray.jwt_token
        
}

}
export default ApiResultModel