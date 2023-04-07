import express, { Application } from "express";

import { APPCONFIG } from "./MainApp";

import { EnvironmentVariables } from "./Config/EnvironmentVariables";
import { DBCONNECTION } from "./Config/Database";

const port = EnvironmentVariables.PORT;

const app: Application = express();
APPCONFIG(app);
DBCONNECTION();

const server = app.listen(port, () => {
  console.log("");
  console.log("Server is up and running on port", port);
});

// To protect my server from crashing when users do what they are not supposed to do
process.on("uncaughtException", (error: Error) => {
  process.exit(1);
});

process.on("unhandledRejection", (res) => {
  server.close(() => {
    process.exit(1);
  });
});
