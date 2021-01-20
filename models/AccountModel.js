class Account {
    date = String;
    email = String;
    jwt_token = String
    name = String;
    provider = String
    provider_id = String
    _id = String

    constructor(data) {
        this.date      =         data.date ?? '';
        this.email     =        data.email ?? '';
        this.jwt_token =    data.jwt_token ?? '';
        this.name      =         data.name ?? '';
        this.provider  =     data.provider ?? ''
        this.provider_id =  data.provider_id ?? ''
        this._id       =           data._id ?? ''
    }
}
export default Account