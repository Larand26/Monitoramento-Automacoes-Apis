import { Router } from "express";
import type { Request, Response } from "express";

//Controllers

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

export default routes;
