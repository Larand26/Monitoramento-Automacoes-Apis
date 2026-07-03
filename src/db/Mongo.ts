import appConfig from "../config/app.config.js";
import mongoose from "mongoose";

export default class Mongo {
  static connection: mongoose.Connection | null = null;

  static async connect() {
    try {
      if (this.connection && this.connection.readyState === 1) {
        console.log("Already connected to MongoDB");
        return;
      }
      await mongoose.connect(appConfig.mongo.uri);
      this.connection = mongoose.connection;
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }

  static async disconnect() {
    try {
      if (this.connection && this.connection.readyState === 1) {
        await mongoose.disconnect();
        this.connection = null;
        console.log("Disconnected from MongoDB");
      }
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
      process.exit(1);
    }
  }

  static async addData(model: mongoose.Model<any>, data: any) {
    try {
      const newData = new model(data);
      await newData.save();
      console.log("Data added to MongoDB");
    } catch (error) {
      console.error("Error adding data to MongoDB:", error);
      process.exit(1);
    }
  }

  static async getData(model: mongoose.Model<any>, query: any) {
    try {
      const data = await model.find(query);
      return data;
    } catch (error) {
      console.error("Error retrieving data from MongoDB:", error);
      process.exit(1);
    }
  }
}
