export interface iLog {
  jobName: string;
  runId: number;
  environment: string;
  status: "success" | "error" | "warning" | "running";
  startedAt: Date;
  finishedAt?: Date;
  durationMs?: number;
  message?: string;
  details?: { [key: string]: any };
}

export interface iResponse {
  success: boolean;
  message: string;
  data?: iLog[];
  error?: any;
}
