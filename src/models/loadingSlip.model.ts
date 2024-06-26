// creating loading slip schema
import mongoose, { Schema } from "mongoose";

const loadingSlipSchema = new Schema(
  {
    loadingSlipNum: {
      type: String,
    },
    date:{
      type:String
    },
    primaryTo: {
      type: String,
    },
    truckNum: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    rate: {
      type: String,
    },
    gauranteeBy: {
      type: String,
    },
    name: {
      type: String,
    },
    advance: {
      type: String,
    },
    balance: {
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

const LoadingSlip =
  mongoose.models.loadingslips ||
  mongoose.model("loadingslips", loadingSlipSchema);
export default LoadingSlip;
