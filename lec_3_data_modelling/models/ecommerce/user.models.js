import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
); //timestamps: updatedAt, createdAt

export const User = mongoose.model('User', userSchema);
