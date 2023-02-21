class ApiError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode=statusCode;
        TouchList.message=message;
    }
}
module.exports=ApiError;