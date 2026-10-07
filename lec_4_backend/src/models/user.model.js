import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken" //jwt is a bearer token-> jwt is a key, whoever sends me this, i'll send them the data
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true //when you know we have to search for this field, use index: true.
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, //cloudinary url
        required: true
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "password is required!"] 
        // mongoose validation rule array: If the field is missing when saving, Mongoose includes this string in the error object so you can easily send it back to the user or API client.
    },
    refreshTokens: {
        type: String,
    }

}, {timestamps: true})

// arrow function doesn't know this/context, so don't use arrow function as call back in .pre()
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next() //if password field is not modified it won't encrypt the password again
    this.password = bcrypt.hash(this.password, 10)
    next()
}) // want to perform some operation just before saving the data, e.g encrypting password

//checking password correctness
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) //this.password is encrypted one, and password is coming from user from frotnend
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)
// in database this will be saved as "users"