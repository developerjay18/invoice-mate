// creating LR schema
import mongoose, { Schema } from 'mongoose';

const lrSchema = new Schema(
  {
    deliveryAt: {
      type: String,
    },
    truckNum: {
      type: String,
    },
    consignorsName: {
      type: String,
    },
    consigneesName: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
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
  { timestamps: true }
);

const LR = mongoose.models.lrs || mongoose.model('lrs', lrSchema);
export default LR;
