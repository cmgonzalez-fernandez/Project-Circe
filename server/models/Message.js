import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user: String,
  message: String,
  response: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Message", messageSchema);
