import { Router } from "express";
import type { Request, Response } from "express";

import { validateLogMiddleware } from "../middlewares/validateLog.js";

//Controllers
import LogsController from "../controllers/LogsController.js";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

routes.post(
  "/add-log",
  validateLogMiddleware,
  (req: Request, res: Response) => {
    return LogsController.addLog(req, res);
  },
);

routes.get("/get-logs", (req: Request, res: Response) => {
  return LogsController.getLogs(req, res);
});

export default routes;
