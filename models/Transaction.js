import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  from: String,
  to: String,
  hash: String,
  input: Object
},
  { timestamps: true },
);

export default mongoose.model('Transaction', TransactionSchema);
