// creating user schema
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phoneNo: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    companies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'companies',
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
