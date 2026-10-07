// to standardize the response of api as error

class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data=null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor) //responsible for creating the .stack property on your custom error object, which shows the file path, function names, and line numbers where the error happened.
            // in the above line: this(• current instance of the ApiError object that you are creating.)
            // this.constructor ("cut-off" point or a filter for the logs, It tells Node.js: "When you are generating the stack trace, hide this constructor function and everything inside it from the log.")
        }
    }
}

export {ApiError}