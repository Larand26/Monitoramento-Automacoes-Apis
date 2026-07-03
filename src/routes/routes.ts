import { Router } from "express";
import type { Request, Response } from "express";

import { validateLogMiddleware } from "../middlewares/validateLog.js";

//Controllers

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

routes.post(
  "/add-log",
  validateLogMiddleware,
  (req: Request, res: Response) => {
    return res.json({ message: "Log added successfully" });
  },
);

export default routes;
