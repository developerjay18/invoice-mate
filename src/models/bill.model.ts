// creating bill schema
import mongoose, { Schema } from 'mongoose';

const billSchema = new Schema(
  {
    name: {
      type: String,
    },
    cnNum: {
      type: Number,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    particular: {
      type: String,
    },
    weight: {
      type: String,
    },
    rate: {
      type: String,
    },
    amount: {
      type: String,
    },
    advance: {
      type: String,
    },
    balance: {
      type: String,
    },
    total: {
      type: String,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
  },
  { timestamps: true }
);

const Bill = mongoose.models.bills || mongoose.model('bills', billSchema);
export default Bill;
