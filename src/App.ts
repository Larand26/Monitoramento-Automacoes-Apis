import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";

export default class App {
  server: express.Express;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      }),
    );
    this.server.use(express.json({ limit: "1mb" }));
    this.server.use(express.urlencoded({ limit: "1mb", extended: true }));
  }

  routes() {
    this.server.use("/rest/v1", routes);
  }
}
