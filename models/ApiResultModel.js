class ApiResultModel{
status = Boolean
message = String
data ={}
    constructor(status,message,data) {
        this.message = message ?? '';
        this.status = status ?? '';
        this.data = data ?? ''
        
}

}
export default ApiResultModel