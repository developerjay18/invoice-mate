// creating challan schema
import mongoose, { Schema } from "mongoose";

const challanSchema = new Schema(
  {
    challanNum: {
      type: String,
    },
    mainBillDate: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    vehicleNum: {
      type: String,
    },
    ownersName: {
      type: String,
    },
    driversName: {
      type: String,
    },
    panNum: {
      type: String,
    },
    item: [
      {
        date: {
          type: String,
        },
        gcNoteNum: {
          type: String,
        },
        pkgs: {
          type: String,
        },
        description: {
          type: String,
        },
        consignor: {
          type: String,
        },
        consignee: {
          type: String,
        },
        weight: {
          type: String,
        },
        rate: {
          type: String,
        },
        ccollection: {
          type: String,
        },
      },
    ],
    commission: {
      type: String,
    },
    refund: {
      type: String,
    },
    hamali: {
      type: String,
    },
    other: {
      type: String,
    },
    munsyanaAndPayment: {
      type: String,
    },
    total: {
      type: String,
    },
    textAreaCalc: {
      type: String,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

const Challan =
  mongoose.models.challans || mongoose.model("challans", challanSchema);
export default Challan;
