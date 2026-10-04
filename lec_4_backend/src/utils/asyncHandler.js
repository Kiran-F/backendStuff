const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)) // whether the requestHandler is sync or async function, promise.resolve handles it as a promise
    }
}
// async function always returns a promise, that's why returning a promise here and handling the resolve and catch snarios

// the following is also a way to write promise:
// new Promise((resolve) => resolve(requestHandler(req, res, next)))

export {asyncHandler}

// const asyncHandler = (fn) => async (error, req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

//higher order functions: which treat functions as a variable, can take functions as parameters and return functions as well