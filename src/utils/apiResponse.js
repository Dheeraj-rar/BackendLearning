class apiResponse {
    constructor(success, message="Success", data , statusCode){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = success < 400
    }
}