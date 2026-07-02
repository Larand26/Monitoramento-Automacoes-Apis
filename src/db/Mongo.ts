import appConfig from "../config/app.config.js";
import mongoose from "mongoose";

export default class Mongo {
  static async connect() {
    try {
      await mongoose.connect(appConfig.mongo.uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
      process.exit(1);
    }
  }
}
