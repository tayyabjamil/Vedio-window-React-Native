class ApiResultModel{
code = Number
message = String
jwt_token = String;
dataModel ={};
    constructor(code,message,detailModel) {
    this.code = code ?? '';
    this.message = message ?? '';
    this.dataModel = detailModel
    // this.jwt_token = detailModelArray.jwt_token
        
}

}
export default ApiResultModel