import type { Request, Response, NextFunction } from "express";

export function validateLogMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { log } = req.body;

  if (!log) {
    return res.status(400).json({ message: "Log is required" });
  }

  if (
    !log.jobName ||
    !log.runId ||
    !log.environment ||
    !log.status ||
    !log.startedAt
  ) {
    return res.status(400).json({ message: "Missing required log fields" });
  }

  return next();
}
