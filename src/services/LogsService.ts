import type { iLog, iResponse } from "../interfaces/interfaces.js";

import Mongo from "../db/Mongo.js";

import LogModel from "../models/Log.model.js";

export default class LogsService {
  static async addLog(log: iLog): Promise<void> {
    try {
      await Mongo.connect();
      await Mongo.addData(LogModel, log);
      await Mongo.disconnect();
      return;
    } catch (error) {
      throw new Error("Error adding log");
    }
  }
}
