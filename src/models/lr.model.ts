// creating LR schema
import mongoose, { Schema } from "mongoose";

const lrSchema = new Schema(
  {
    deliveryAt: {
      type: String,
    },
    policeNo: {
      type: String,
    },
    iDate: {
      type: String,
    },
    amount: {
      type: String,
    },
    risk: {
      type: String,
    },
    lrNum: {
      type: String,
    },
    date: {
      type: String,
    },
    truckNum: {
      type: String,
    },
    consignorsName: {
      type: String,
    },
    consignorsGstNum: {
      type: String,
    },
    consigneesName: {
      type: String,
    },
    consigneesGstNum: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    list: [
      {
        package: {
          type: String,
        },
        content: {
          type: String,
        },
        actualWeight: {
          type: String,
        },
        chargeWeight: {
          type: String,
        },
        value: {
          type: String,
        },
        firstFreightPaid: {
          type: String,
        },
        firstFreightToBePaid: {
          type: String,
        },
        serviceTax: {
          type: String,
        },
        tdsPaid: {
          type: String,
        },
        tdsToBePaid: {
          type: String,
        },
        hemaliPaid: {
          type: String,
        },
        hemaliToBePaid: {
          type: String,
        },
        advancePaid: {
          type: String,
        },
        advanceToBePaid: {
          type: String,
        },
        stataricalPaid: {
          type: String,
        },
        stataricalToBePaid: {
          type: String,
        },
        odChargePaid: {
          type: String,
        },
        odChargeToBePaid: {
          type: String,
        },
        grTotalPaid: {
          type: String,
        },
        grTotalToBePaid: {
          type: String,
        },
        remarks: {
          type: String,
        },
      },
    ],
    company: {
      type: Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
  },
  { timestamps: true }
);

const LR = mongoose.models.lrs || mongoose.model("lrs", lrSchema);
export default LR;
