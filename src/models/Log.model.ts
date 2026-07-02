import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  runId: { type: String, required: true },
  environment: {
    type: String,
    required: false,
    enum: ["production", "development"],
  },
  status: {
    type: String,
    required: true,
    enum: ["success", "error", "warning", "running"],
  },
  startedAt: { type: Date, required: true },
  finishedAt: { type: Date, required: false },
  durationMs: { type: Number, required: false },
  message: { type: String, required: false },
  details: { type: mongoose.Schema.Types.Mixed, required: false },
});

export const LogModel = mongoose.model("Log", logSchema, "execution_logs");

export default LogModel;
