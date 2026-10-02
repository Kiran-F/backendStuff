import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    // username: String, //this only define the datatype of field
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'], // if required is not true we can pass custom message
      min: 8,
      max: 15,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema); //it means that create a "User" schema on the basis of userSchema

// mongodb's standardized practice: the schema name converts into plural and all letters to lowercase like User -> users
