import appConfig from "./config/app.config.js";

import App from "./App.js";
import Mongo from "./db/Mongo.js";

const app = new App().server;

async function startServer() {
  const port = appConfig.api.port;
  await Mongo.connect();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
