// creating loading slip schema
import mongoose, { Schema } from 'mongoose';

const loadingSlipSchema = new Schema(
  {
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
    origin: {
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
  },
  { timestamps: true }
);

const LoadingSlip =
  mongoose.models.loadingslips ||
  mongoose.model('loadingslips', loadingSlipSchema);
export default LoadingSlip;
