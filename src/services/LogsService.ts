import type { iLog, iResponse } from "../interfaces/interfaces.js";

import Mongo from "../db/Mongo.js";

import LogModel from "../models/Log.model.js";

export default class LogsService {
  static async addLog(log: iLog): Promise<void> {
    try {
      await Mongo.connect();
      await Mongo.addData(LogModel, log);
      return;
    } catch (error) {
      throw new Error("Error adding log");
    }
  }

  static async getLogs(filters: {
    jobName?: string;
    environment?: string;
    status?: "success" | "error" | "warning" | "running";
  }): Promise<iLog[]> {
    try {
      await Mongo.connect();
      const query: any = {};
      if (filters.jobName) query.jobName = filters.jobName;
      if (filters.environment) query.environment = filters.environment;
      if (filters.status) query.status = filters.status;
      const logs = await Mongo.getData(LogModel, query);
      return logs;
    } catch (error) {
      throw new Error("Error fetching logs");
    }
  }
}
