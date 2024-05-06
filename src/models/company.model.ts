// creating company schema
import mongoose, { Schema } from 'mongoose';

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
    },
    gstNum: {
      type: String,
      default: '',
    },
    panNum: {
      type: String,
      required: true,
    },
    msmeNum: {
      type: String,
      default: '',
    },
    mobileNum: [
      {
        type: String,
      },
    ],
    address: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    challans: [
      {
        type: Schema.Types.ObjectId,
        ref: 'challans',
      },
    ],
    loadingSlips: [
      {
        type: Schema.Types.ObjectId,
        ref: 'loadingslips',
      },
    ],
    bills: [
      {
        type: Schema.Types.ObjectId,
        ref: 'bills',
      },
    ],
    lrs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'lrs',
      },
    ],
    vouchers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'vouchers',
      },
    ],
  },
  { timestamps: true }
);

const Company =
  mongoose.models.companies || mongoose.model('companies', companySchema);
export default Company;
