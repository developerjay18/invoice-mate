// creating bill schema
import mongoose, { Schema } from "mongoose";

const billSchema = new Schema(
  {
    billNum: {
      type: String,
    },
    mainBillDate: {
      type: String,
    },
    name: {
      type: String,
    },
    list: [
      {
        serialNum: {
          type: String,
        },
        date: {
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
      },
    ],
    total: {
      type: String,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
  },
  { timestamps: true }
);

const Bill = mongoose.models.bills || mongoose.model("bills", billSchema);
export default Bill;
