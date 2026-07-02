import { Router } from "express";
import type { Request, Response } from "express";

//Controllers

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

routes.post("/add-log", (req: Request, res: Response) => {
  const { message } = req.body;
  console.log("Log message:", message);
  return res.json({ message: "Log added successfully" });
});

export default routes;
