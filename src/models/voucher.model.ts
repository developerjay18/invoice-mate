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
      required: true,
    },
  },
  { timestamps: true }
);

voucherSchema.pre('save', async function (next) {
  try {
    const found = Voucher.findById(this.company);
    if (!found) {
      throw new Error(
        `Reference to the company ${this.company} is not available`
      );
    }
    next();
  } catch (error) {
    // @ts-ignore;
    next(error);
  }
});

const Voucher =
  mongoose.models.vouchers || mongoose.model('vouchers', voucherSchema);
export default Voucher;
