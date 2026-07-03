import type { Request, Response } from "express";
import type { iLog, iResponse } from "../interfaces/interfaces.js";

import LogsService from "../services/LogsService.js";

export default class LogsController {
  // Adiciona um log ao sistema
  static async addLog(
    req: Request,
    res: Response,
  ): Promise<Response<iResponse>> {
    try {
      const { log } = req.body as { log: iLog };

      await LogsService.addLog(log);

      return res
        .status(200)
        .json({ success: true, message: "Log added successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error adding log" });
    }
  }
}
