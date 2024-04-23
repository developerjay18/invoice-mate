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
      type: String,
    },
    paise: {
      type: String,
    },
    total: {
      type: String,
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
    company: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
  },
  { timestamps: true }
);

const Voucher =
  mongoose.models.vouchers || mongoose.model('vouchers', voucherSchema);
export default Voucher;
