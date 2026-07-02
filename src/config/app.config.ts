import dotenv from "dotenv";
dotenv.config();

export default {
  api: {
    port: process.env.API_PORT || 3000,
    tokenSecret: process.env.TOKEN_SECRET || "default_secret",
  },
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
  },
};
