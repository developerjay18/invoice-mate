// creating voucher schema
import mongoose, { Schema } from 'mongoose';

const voucherSchema = new Schema(
  {
    paidTo: {
      type: String,
    },
    debit: {
      type: String,
    },
    onAccountOf: {
      type: String,
    },
    particular: {
      type: String,
    },
    rupees: {
      type: Number,
    },
    paise: {
      type: Number,
    },
    total: {
      type: Number,
    },
    authorisedBy: {
      type: String,
    },
    passedBy: {
      type: String,
    },
    payment: {
      type: String,
    },
    chequeNum: {
      type: String,
    },
  },
  { timestamps: true }
);

const Voucher =
  mongoose.models.vouchers || mongoose.model('vouchers', voucherSchema);
export default Voucher;
