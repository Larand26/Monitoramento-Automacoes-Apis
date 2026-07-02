import App from "./App.js";

const app = new App().server;

async function startServer() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
